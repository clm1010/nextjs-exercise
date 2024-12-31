import React from 'react'
import ClientComponent from '@/components/client-component'
import ServerComponent from '@/components/server-component'

export default function P() {
  return (
    <div className='container mx-auto'>
      <ClientComponent>
        <ServerComponent /> {/* 服务端组件 */}
      </ClientComponent>
    </div>
  )
}
