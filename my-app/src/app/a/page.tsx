import React from 'react'
import Image from 'next/image'
// import { headers } from 'next/headers'

const fetchImg = async () => {
  const response = await fetch('https://dog.ceo/api/breeds/image/random', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    // next.js 15.0.0 版本 开发环境下开始支持 fetch cache:'no-store' 默认不缓存，可以通过设置 cache: 'force-cache' 强制缓存
    // 但是生产环境下不支持，所以需要设置 cache: 'no-store' 不缓存
    cache: 'no-store'
  })
  return response.json()
}

/**
 * @deprecated 全路由缓存演示（Full Route Cache）
 */
export default async function Page() {
  // 引入 headers 动态函数， 会让路由动态渲染
  // 这样就失去了全路由缓存
  // await headers()
  console.log('🐶')
  const obj1 = await fetchImg()
  const obj2 = await fetchImg()
  const obj3 = await fetchImg()
  console.log('🐮')
  return (
    <div className='container mx-auto flex justify-center gap-4 h-screen items-center'>
      <Image src={obj1.message} width={200} height={200} alt='dog1'></Image>
      <Image src={obj2.message} width={200} height={200} alt='dog2'></Image>
      <Image src={obj3.message} width={200} height={200} alt='dog3'></Image>
    </div>
  )
}
