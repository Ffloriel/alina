import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

const storybookRealm = 'Protected Storybook'

function unauthorizedResponse(message = 'Authentication required') {
  return new NextResponse(message, {
    status: 401,
    headers: {
      'Cache-Control': 'no-store',
      'WWW-Authenticate': `Basic realm="${storybookRealm}", charset="UTF-8"`,
    },
  })
}

function decodeBasicAuthHeader(authorizationHeader: string) {
  if (!authorizationHeader.startsWith('Basic ')) {
    return null
  }

  try {
    const decodedCredentials = atob(authorizationHeader.slice('Basic '.length))
    const separatorIndex = decodedCredentials.indexOf(':')

    if (separatorIndex === -1) {
      return null
    }

    return {
      username: decodedCredentials.slice(0, separatorIndex),
      password: decodedCredentials.slice(separatorIndex + 1),
    }
  } catch {
    return null
  }
}

export function proxy(request: NextRequest) {
  const expectedUsername = process.env.STORYBOOK_AUTH_USER
  const expectedPassword = process.env.STORYBOOK_AUTH_PASSWORD

  if (!expectedUsername || !expectedPassword) {
    return new NextResponse('Storybook protection is enabled, but credentials are not configured.', {
      status: 503,
      headers: {
        'Cache-Control': 'no-store',
      },
    })
  }

  const decodedCredentials = decodeBasicAuthHeader(request.headers.get('authorization') ?? '')

  if (!decodedCredentials) {
    return unauthorizedResponse()
  }

  if (decodedCredentials.username !== expectedUsername || decodedCredentials.password !== expectedPassword) {
    return unauthorizedResponse('Invalid credentials')
  }

  if (request.nextUrl.pathname === '/storybook' || request.nextUrl.pathname === '/storybook/') {
    const rewrittenUrl = request.nextUrl.clone()
    rewrittenUrl.pathname = '/storybook/index.html'
    return NextResponse.rewrite(rewrittenUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/storybook', '/storybook/:path*'],
}