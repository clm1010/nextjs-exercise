'use client'
import { deleteSnippet } from '@/actions'
import React, { startTransition } from 'react'

/**
 * @description 删除按钮
 * @param props
 */
export default function SnippetDelButton(props: { id: number }) {
  const id = props.id
  const handlerDelete = () => {
    // startTransition 会阻塞 UI 更新，能保证数据删除完成后在进行redirect跳转
    startTransition(async () => {
      await deleteSnippet(id)
    })
  }
  return (
    <button
      className='border border-gray-400 rounded p-2 hover:bg-blue-400 hover:text-white hover:border-blue-400'
      onClick={handlerDelete}
    >
      Delete
    </button>
  )
}
