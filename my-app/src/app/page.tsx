import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const fetchImg = async () => {
  const res = await fetch('https://dog.ceo/api/breeds/image/random', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
    // cache: 'force-cache' // 默认是 no-store 不缓存，可以设置 force-cache 强制缓存
  })
  const data = await res.json()
  return data.message
}

/**
 * @description: fetch 默认缓存的两种情况演示
 */
export default async function Page() {
  const obj = await fetchImg()
  console.log('🐮')
  return (
    <div className='container mx-auto flex justify-center items-center h-screen flex-col'>
      <Image src={obj} alt='Random dog image' width={400} height={400} />
      <Link
        className='mt-2 hover:underline hover:text-blue-600'
        href='http://localhost:3000/api/cache'
      >
        访问localhost/api/cache/route测试缓存
      </Link>
    </div>
  )
}

/**
 * 总结：
 * 开发环境下
 * 1. fetch 默认不缓存，可以通过设置 cache: 'force-cache' 强制缓存
 * 2. next.js 15.0.0 版本开始支持 fetch 默认 'no-store' 不缓存，可以通过设置 cache: 'force-cache' 强制缓存
 *
 * 生产环境下 npm run build
 * fetch 需要手动设置 cache: 'no-store'  不缓存
 * Ctrl + F5 强制刷新 也会缓存
 *
 *
 */
