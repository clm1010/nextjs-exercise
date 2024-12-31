'use client'
import React, { useState } from 'react'
// import ServerComponent from './server-component' // 客户端组件引入服务端组件 不建议不要这么引入会报错

// 使用 props 传递服务端组件 children
export default function ClientComponent({
  children
}: {
  children: React.ReactNode
}) {
  const [count, setCount] = useState(0)

  const handlerClick = () => {
    setCount(count + 1)
  }
  return (
    <div>
      <p>{count}</p>
      <button
        type='button'
        className='bg-blue-500 rounded w-10'
        onClick={handlerClick}
      >
        +1
      </button>
      {children}
    </div>
  )
}
