import React from 'react'
import 'server-only' // 使用 server-only 防止客户端引入服务端组件

export default function ServerComponent() {
  return <div>ServerComponent</div>
}
