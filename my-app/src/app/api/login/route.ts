import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const { login, password } = await request.json()

  // 调用后端接口
  // await fetch('https://api/login', {
  const r = await fetch('https://api.zhihur.com/admin/auth/sign_in', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ login, password })
  })

  const data = await r.json()
  // 第一种方式 把 token 写入 cookie 的形式
  // return NextResponse.json(
  //   {
  //     success: true,
  //     msg: data.data.token
  //   },
  //   {
  //     headers: {
  //       'Set-Cookie': `token=${data.data.token}; Path=/; Max-Age=86400; HttpOnly`
  //     }
  //   }
  // )

  // 第二种方式 把 token 写入 header 的形式
  const response = NextResponse.json({
    success: true,
    msg: data.data.token
  })
  response.cookies.set('token', data.data.token, {
    httpOnly: true,
    maxAge: 86400,
    path: '/'
  })

  return response
}
