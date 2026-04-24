import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

const storybookRootAssets = new Set([
  '/iframe.html',
  '/index.json',
  '/metadata.json',
  '/project.json',
  '/stories.json',
  '/vite-inject-mocker-entry.js',
])

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (
    pathname.startsWith('/sb-addons/') ||
    pathname.startsWith('/sb-common-assets/') ||
    pathname.startsWith('/sb-manager/') ||
    storybookRootAssets.has(pathname)
  ) {
    const rewrittenUrl = request.nextUrl.clone()
    rewrittenUrl.pathname = `/storybook${pathname}`
    return NextResponse.rewrite(rewrittenUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/iframe.html',
    '/index.json',
    '/metadata.json',
    '/project.json',
    '/sb-addons/:path*',
    '/sb-common-assets/:path*',
    '/sb-manager/:path*',
    '/stories.json',
    '/vite-inject-mocker-entry.js',
  ],
}