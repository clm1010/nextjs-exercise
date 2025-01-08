'use client'

import { Editor } from '@monaco-editor/react'
import type { Snippet } from '@prisma/client'
import { useState } from 'react'
import { editSnippet } from '@/actions'
import { useFormState } from 'react-dom'
/**
 * @description 编辑表单
 * @param snippet
 */

const initialState = {
  message: ''
}
export default function SnippetEditForm({ snippet }: { snippet: Snippet }) {
  const [code, setCode] = useState(snippet.code)
  // console.log(code)
  // 传递额外参数
  const editSnippetWithOthers = editSnippet.bind(
    null,
    initialState,
    snippet.id,
    code
  )
  const [state, editSnippetAction] = useFormState(
    editSnippetWithOthers,
    initialState
  )

  const handlerChange = (code: string = '') => {
    setCode(code)
  }
  return (
    <div className='flex flex-col gap-4 mt-4'>
      <h1 className='font-bold text-lg'>{snippet.title}</h1>
      <Editor
        theme='vs-dark'
        width='70vw'
        height='40vh'
        options={{ minimap: { enabled: false } }}
        defaultLanguage='typescript'
        defaultValue={snippet.code}
        onChange={handlerChange}
      />
      {state.message && (
        <p className='my-2 p-2 bg-red-200 border rounded border-red-400 '>
          {state.message}
        </p>
      )}
      <form action={editSnippetAction}>
        <button className='border border-gray-400 rounded p-2 hover:bg-blue-400 hover:text-white hover:border-blue-400'>
          Save
        </button>
      </form>
    </div>
  )
}
