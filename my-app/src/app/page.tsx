// RSC 渲染策略 - 动态渲染

// import { cookies } from 'next/headers'

// 动态 API 依赖于只能在请求时知道的信息（而不是在预渲染期间提前知道的信息）。
// 使用任何这些 API 都表明了开发人员的意图，并将在请求时选择将整个路线转为动态渲染

// 第一种 动态渲染
// 动态渲染 API
// cookies
// headers
// connection
// draftMode
// searchParams prop
// unstable_noStore

// export default async function Page() {
//   const cookiesStore = cookies()
//   ;(await cookiesStore).get('token')
//   console.log('🐮')
//   return <h1>{new Date().toLocaleTimeString()}</h1>
// }

// 第二种 动态渲染
// 在 Next.js 的先前版本中，使用 fetch 时，默认缓存值为 force-cache。在版本 15 中，该值已更改为默认的 cache: no-store
export default async function Page() {
  // nextjs 15.0.0 之后的版本，fetch 默认是 cache: 'force-cache' 缓存
  // const r = await (
  //   await fetch('https://my-json-server.typicode.com/clm1010/json-api/db')
  // ).json()

  // 需要设置 cache: 'no-store' 才会不缓存
  const r = await (
    await fetch('https://my-json-server.typicode.com/clm1010/json-api/db', {
      cache: 'no-store'
    })
  ).json()

  console.log(r)
  console.log('🐮')
  return <h1>{new Date().toLocaleTimeString()}</h1>
}
