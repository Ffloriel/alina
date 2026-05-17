import { promises as fs } from 'node:fs'
import path from 'node:path'
import { createStorybookMcpHandler } from '@storybook/mcp'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { isAllowedAuthEmail } from '@/lib/auth/access'
import { auth } from '@/lib/auth/server'

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

const storybookRoot = path.resolve(process.cwd(), 'storybook-static-private')

let mcpHandlerPromise: ReturnType<typeof createStorybookMcpHandler> | null = null

function getBearerToken(request: NextRequest) {
  const authorization = request.headers.get('authorization') ?? ''
  const match = authorization.match(/^Bearer\s+(.+)$/i)

  return match?.[1]?.trim() ?? ''
}

async function isAuthorized(request: NextRequest) {
  const configuredToken = process.env.STORYBOOK_MCP_TOKEN?.trim()

  if (configuredToken && getBearerToken(request) === configuredToken) {
    return true
  }

  try {
    const { data: session } = await auth.getSession()
    return isAllowedAuthEmail(session?.user?.email)
  } catch {
    return false
  }
}

async function readStorybookManifest(manifestPath: string) {
  const normalizedPath = manifestPath.replace(/^\.\//, '')
  const resolvedPath = path.resolve(storybookRoot, normalizedPath)

  if (!resolvedPath.startsWith(`${storybookRoot}${path.sep}`)) {
    throw new Error(`Invalid Storybook manifest path: ${manifestPath}`)
  }

  return fs.readFile(resolvedPath, 'utf8')
}

function getMcpHandler() {
  mcpHandlerPromise ??= createStorybookMcpHandler({
    manifestProvider: async (_request, manifestPath) => readStorybookManifest(manifestPath),
  })

  return mcpHandlerPromise
}

async function handleMcpRequest(request: NextRequest) {
  if (!(await isAuthorized(request))) {
    return new NextResponse('Unauthorized', {
      status: 401,
      headers: {
        'Cache-Control': 'private, no-store',
        'WWW-Authenticate': 'Bearer realm="alina-storybook-mcp"',
      },
    })
  }

  const mcpHandler = await getMcpHandler()
  return mcpHandler(request)
}

export async function GET(request: NextRequest) {
  return handleMcpRequest(request)
}

export async function POST(request: NextRequest) {
  return handleMcpRequest(request)
}
