'use client'
// import Link from 'next/link'
import { useRouter } from 'next/navigation'

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
  // 使用 useRouter 跳转路由
  const router = useRouter()
  const handlerClickNews = () => {
    router.push('/news')
    router.refresh()
  }

  const handlerClickSports = () => {
    router.push('/sports')
    router.refresh()
  }
  return (
    <div className='container mx-auto flex justify-center gap-4 h-screen items-center flex-col'>
      <nav className='flex gap-4'>
        {/* prefetch={false} 禁用预加载 */}
        {/* <Link className='text-blue-600 hover:underline' href='/news'>
          新闻
        </Link>
        <Link className='text-blue-600 hover:underline' href='/sports' >
          体育
        </Link> */}
        <span className='text-blue-600 hover:underline cursor-pointer' onClick={handlerClickNews}>新闻</span>
        <span className='text-blue-600 hover:underline cursor-pointer' onClick={handlerClickSports}>体育</span>
      </nav>
      {children}
    </div>
  )
}
