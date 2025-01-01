// RSC 渲染策略 - 静态渲染
// npm run build 打包后 使用 npm run start 启动  页事件不会变化
// 只有重新验证后，才会在后台重新渲染（重新渲染就是清除缓存数据，重新获取数据）

export const revalidate = 10 // 首次访问时 10 秒后重新验证,只有再次请求时，才会重新渲染

export default async function Page() {
  console.log('🐮')
  return <h1>{new Date().toLocaleTimeString()}</h1>
}
