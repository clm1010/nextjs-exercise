'use client'

import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

const linkData = [
  { name: 'About', path: '/dashboard/about' },
  { name: 'Settings', path: '/dashboard/settings' }
]

export default function DashboardLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const [count, setCount] = useState(0)
  const pathname = usePathname() // usePathname是一个客户端组件钩子(hook)，可让您读取当前 URL 的路径名
  console.log(pathname, 'pathname')
  return (
    <div className='border-2 border-dashed border-black p-4 w-1/2 mx-auto mt-4'>
      <p>Current path: {pathname}</p>
      <div className='flex gap-4 font-bold text-lg mb-4'>
        {linkData.map(({ name, path }) => (
          <Link
            key={name}
            className={pathname === path ? 'text-purple-500' : ''}
            href={path}
          >
            {name}
          </Link>
        ))}
      </div>
      <h2>Dashboard Layout {count}</h2>
      <button
        className='bg-black text-white p-2 my-4 rounded-md hover:bg-gray-800'
        type='button'
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      {children}
    </div>
  )
}
