import Link from 'next/link'

// 使用 dynamic = 'force-dynamic' 或  revalidate = 0 路由段配置选项：这将跳过完整路由缓存和数据缓存
// 表示强制动态渲染，不使用缓存
export const dynamic = 'force-dynamic'

/**
 *
 * @deprecated 客户端路由缓存演示（Client Route Cache）
 *
 */
export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className='container mx-auto flex justify-center gap-4 h-screen items-center flex-col'>
      <nav className='flex gap-4'>
        {/* prefetch={false} 禁用预加载 */}
        <Link className='text-blue-600 hover:underline' href='/news'>
          新闻
        </Link>
        <Link className='text-blue-600 hover:underline' href='/sports' >
          体育
        </Link>
      </nav>
      {children}
    </div>
  )
}
