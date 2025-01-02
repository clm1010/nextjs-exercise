import { revalidatePath, revalidateTag } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

/**
 * @api api/revalidateCache?path=/
 * @apiDescription 第一种按需重新验证 (Route Handler) 路由处理程序 使用 revalidatePath 进行按需重新验证
 */
// export function GET(request: NextRequest) {
//   const path = request.nextUrl.searchParams.get('path') //访问 /api/revalidateCache?path=/ => /api/revalidateCache?path=/api/cache
//   console.log(path, 'path')
//   if (path) {
//     revalidatePath(path)
//     return NextResponse.json({ revalidated: true, time: Date.now() })
//   }
//   return NextResponse.json({ revalidated: false, time: Date.now() })
// }

/**
 * @api api/revalidateCache?path=/
 * @apiDescription 第二种按需重新验证 (Route Handler) 路由处理程序 使用 revalidateTag 标记 进行按需重新验证
 */
export function GET(request: NextRequest) {
  const tag = request.nextUrl.searchParams.get('tag') //访问 /api/revalidateCache?tag=dog => /api/revalidateCache?tag=dog
  console.log(tag, 'tag')
  if (tag) {
    revalidateTag(tag)
    return NextResponse.json({ revalidated: true, time: Date.now() })
  }
  return NextResponse.json({ revalidated: false, time: Date.now() })
}

