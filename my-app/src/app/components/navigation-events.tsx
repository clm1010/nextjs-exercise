'use client'
import { useEffect } from 'react'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'

/**
 *
 * @description 当观测到 pathname 或 searchParams 变化时，调用 router.refresh() 方法刷新页面
 *
 */
export function NavigationEvents() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const router = useRouter()
  // 当观测到 pathname 或 searchParams 变化时，调用 router.refresh() 方法刷新页面
  useEffect(() => {
    const url = `${pathname}?${searchParams}`
    console.log(url)
    router.refresh()
  }, [pathname, searchParams, router])
  return null
}
