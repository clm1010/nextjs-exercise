'use client'
import Link from 'next/link'
import { Suspense } from 'react'
import { NavigationEvents } from '@/app/components/navigation-events'

/**
 *
 * @deprecated 客户端路由缓存演示（Client Route Cache）02
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
      {/* 使用 Suspense 包裹 NavigationEvents组件 观测到 pathname 或 searchParams 变化时，调用 router.refresh() 方法刷新页面 */}
      <Suspense fallback={null}>
        <NavigationEvents />
      </Suspense>
    </div>
  )
}
