import { sleep } from '@/utils'
// 使用 dynamic = 'force-dynamic' 或  revalidate = 0 路由段配置选项：这将跳过完整路由缓存和数据缓存
// 表示强制动态渲染，不使用缓存
export const dynamic = 'force-dynamic'

export default async function Page() {
  await sleep(3000)
  return <div>体育：{new Date().toLocaleTimeString()}</div>
}
