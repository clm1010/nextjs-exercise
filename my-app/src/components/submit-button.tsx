'use client'
import React from 'react'
import { useFormStatus } from 'react-dom'

export default function SubmitButton() {
  // 使用 useFormStatus hook 提交状态
  const { pending } = useFormStatus()
  return (
    <button
      className='border border-gray-300 hover:bg-blue-600 hover:text-white rounded-md'
      type='submit'
      disabled={pending}
    >
      {pending ? '提交中...' : '提交'}
    </button>
  )
}
