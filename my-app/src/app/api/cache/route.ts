import { NextResponse } from 'next/server'

// next.js 15.0.0 版本开始支持 fetch 默认不缓存，可以通过设置 cache: 'force-cache' 强制缓存
export async function GET() {
  const res = await fetch('https://dog.ceo/api/breeds/image/random', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    cache: 'force-cache' // 默认是 no-store 不缓存，可以设置 force-cache 强制缓存
  })
  const data = await res.json()
  return NextResponse.json(data)
}
