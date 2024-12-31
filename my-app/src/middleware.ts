import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  // 如果不是登录页
  if (request.nextUrl.pathname !== '/login') {
    // 并且没有 token
    const token = request.cookies.get('token')?.value
    if (!token) {
      // 拦截到登录页
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }
}

// 配置
// 置允许使用完整的正则表达式，因此支持负向前瞻或字符匹配等匹配。下面是匹配除特定路径之外的所有内容的负向前瞻示例
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)'
  ],
}
