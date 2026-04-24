import { promises as fs } from 'node:fs'
import path from 'node:path'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth/server'
import { buildAuthPageHref, isAllowedAuthEmail, restrictedAccessMessage } from '@/lib/auth/access'

const storybookRoot = path.resolve(process.cwd(), 'public', 'storybook')

const contentTypes: Record<string, string> = {
  '.css': 'text/css; charset=utf-8',
  '.gif': 'image/gif',
  '.html': 'text/html; charset=utf-8',
  '.ico': 'image/x-icon',
  '.jpeg': 'image/jpeg',
  '.jpg': 'image/jpeg',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.map': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.txt': 'text/plain; charset=utf-8',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
}

type StorybookRouteContext = {
  params: Promise<{ path?: string[] }>
}

function redirectToSignIn(request: NextRequest, error?: string) {
  return NextResponse.redirect(new URL(buildAuthPageHref('/auth/sign-in', '/storybook', error), request.url))
}

function getContentType(filePath: string) {
  return contentTypes[path.extname(filePath).toLowerCase()] ?? 'application/octet-stream'
}

function addStorybookBaseHref(html: string) {
  if (html.includes('<base ')) {
    return html
  }

  return html.replace('<head>', '<head><base href="/storybook/" />')
}

async function resolveAssetPath(pathSegments?: string[]) {
  const requestedPath = pathSegments?.length ? path.join(...pathSegments) : 'index.html'
  let resolvedPath = path.resolve(storybookRoot, requestedPath)

  if (!resolvedPath.startsWith(`${storybookRoot}${path.sep}`) && resolvedPath !== storybookRoot) {
    return null
  }

  try {
    const stats = await fs.stat(resolvedPath)

    if (stats.isDirectory()) {
      resolvedPath = path.join(resolvedPath, 'index.html')
    }

    const finalStats = await fs.stat(resolvedPath)
    return finalStats.isFile() ? resolvedPath : null
  } catch {
    return null
  }
}

async function handleStorybookRequest(request: NextRequest, context: StorybookRouteContext, includeBody: boolean) {
  const { data: session } = await auth.getSession()

  if (!session?.user) {
    return redirectToSignIn(request)
  }

  if (!isAllowedAuthEmail(session.user.email ?? '')) {
    return redirectToSignIn(request, restrictedAccessMessage)
  }

  const { path: requestedPath } = await context.params
  const assetPath = await resolveAssetPath(requestedPath)

  if (!assetPath) {
    return new NextResponse('Not found', { status: 404 })
  }

  let body: BodyInit | null = null

  if (includeBody) {
    const isRootIndex = (!requestedPath || requestedPath.length === 0) && assetPath.endsWith('index.html')
    body = isRootIndex ? addStorybookBaseHref(await fs.readFile(assetPath, 'utf8')) : new Uint8Array(await fs.readFile(assetPath))
  }

  return new NextResponse(body, {
    headers: {
      'Cache-Control': assetPath.endsWith('.html') ? 'private, no-store' : 'private, max-age=300, must-revalidate',
      'Content-Type': getContentType(assetPath),
    },
  })
}

export async function GET(request: NextRequest, context: StorybookRouteContext) {
  return handleStorybookRequest(request, context, true)
}

export async function HEAD(request: NextRequest, context: StorybookRouteContext) {
  return handleStorybookRequest(request, context, false)
}
