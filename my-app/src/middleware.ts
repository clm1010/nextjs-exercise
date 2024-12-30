import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// export function middleware(request: NextRequest) {
//   console.log('request.nextUrl.pathname', request.nextUrl.pathname, '🐮🐮')
// }

// 第一种方式
// 只有命中 /about 才会执行 middleware
// export const config = { matcher: '/about' }

// /about、/about/xxx、/about/xxx/xxx、/dashboard 、/dashboard/xxx 都会执行 middleware
// export const config = { matcher: ['/about/:path*', '/dashboard/:path*'] }

// export const config = {
//   matcher: [
//     /*
//      * Match all request paths except for the ones starting with:
//      * - api (API routes)
//      * - _next/static (static files)
//      * - _next/image (image optimization files)
//      * - favicon.ico, sitemap.xml, robots.txt (metadata files)
//      */
//     '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)'
//   ]
// }

// 第二种方式
// 重写方式 访问 /about 重定向到 /about-2
export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/about')) {
    return NextResponse.rewrite(new URL('/about-2', request.url))
  }

  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.rewrite(new URL('/dashboard/user', request.url))
  }
}
