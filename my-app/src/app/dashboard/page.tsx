'use client'
import React from 'react'
import { Button } from 'antd'
import { useRouter } from 'next/navigation'

export default function Page() {
  const router = useRouter()
  const handlerLogout = () => {
    fetch('/api/logout', {
      method: 'DELETE'
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          // window.location.href = '/login'
          router.push('/login')
        }
      })
  }
  return (
    <div className='flex justify-center items-center h-screen'>
      <Button type='primary' onClick={handlerLogout}>
        退出
      </Button>
    </div>
  )
}
