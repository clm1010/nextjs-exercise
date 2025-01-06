'use client'
import { addTodo } from '@/actions'
import React from 'react'

export default function ClientButton({
  children
}: {
  children: React.ReactNode
}) {
  const handlerBtnClick = async () => {
    const formData = new FormData()
    formData.append('todo', '🐮')
    await addTodo(formData)
    console.log('click')
  }
  return (
    <button className='border border-gray-300 pl-4 pr-4 ml-2 hover:bg-blue-600 hover:text-white rounded-md' onClick={handlerBtnClick}>
      {children}
    </button>
  )
}
