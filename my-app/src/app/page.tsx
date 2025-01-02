import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

// export const revalidate = 20 // 20 秒后重新验证 第二种写法

/**
 * @description: 基于时间的重新验证 fetch next: { revalidate: 10 }
 */
// const fetchImg = async () => {
//   const res = await fetch('https://dog.ceo/api/breeds/image/random', {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     next: { revalidate: 10 }, // 第一种写法 10 秒后重新验证
//     cache: 'force-cache' // 默认是 no-store 不缓存，可以设置 force-cache 强制缓存
//   })
//   const data = await res.json()
//   return data.message
// }

/**
 * @description: 第一种按需重新验证 (Route Handler) 路由处理程序 使用 revalidatePath 进行按需重新验证
 */
// const fetchImg = async () => {
//   const res = await fetch('https://dog.ceo/api/breeds/image/random', {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     cache: 'force-cache' // 默认是 no-store 不缓存，可以设置 force-cache 强制缓存
//   })
//   const data = await res.json()
//   return data.message
// }

/**
 * @description: 第二种按需重新验证 (Route Handler) 路由处理程序 使用 revalidateTag 标记 进行按需重新验证
 */
const fetchImg = async () => {
  const res = await fetch('https://dog.ceo/api/breeds/image/random', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    cache: 'force-cache', // 默认是 no-store 不缓存，可以设置 force-cache 强制缓存
    next: {
      tags: ['dog'] // 标记 dog
    }
  })
  const data = await res.json()
  return data.message
}

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
      <Link
        className='mt-2 hover:underline hover:text-blue-600'
        href='http://localhost:3000/api/revalidateCache?path=/'
      >
        路由处理程序 使用 revalidatePath 进行按需重新验证
      </Link>
      <Link
        className='mt-2 hover:underline hover:text-blue-600'
        href='http://localhost:3000/api/revalidateCache?tag=dog'
      >
        路由处理程序 使用 revalidateTag 进行按需重新验证
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
 * 1. fetch 都会缓存，即使默认设置了 cache: 'no-store' 也会缓存
 * 2. Ctrl + F5 强制刷新 也会缓存
 * 3. 但是可以通过设置 next: { revalidate: 10 } 基于时间的重新验证
 *
 */
