'use client'
import React from 'react'
import { useFormState } from 'react-dom'
import { createSnippet } from '@/actions'

const initialState = {
  message: ''
}

export default function Page() {
  // useFormState(参数1：Server Action, 参数2：初始值)
  const [state, createSnippetAction] = useFormState(createSnippet, initialState)
  // console.log(state, 'state')

  return (
    <form action={createSnippetAction}>
      <h1 className='font-bold text-lg m-4'>Create a new snippet</h1>
      <div className='flex flex-col gap-4'>
        {/* title */}
        <div className='flex gap-4'>
          <label className='w-12' htmlFor='title'>
            Title
          </label>
          <input
            className='border border-gray-500 rounded p-2 w-full'
            type='text'
            name='title'
            id='title'
            // required
          />
        </div>
        {/* code */}
        <div className='flex gap-4'>
          <label className='w-12' htmlFor='code'>
            Code
          </label>
          <input
            className='border border-gray-500 rounded p-2 w-full'
            type='text'
            name='code'
            id='code'
            // required
          />
        </div>
        {state.message && (
          <p className='my-2 p-2 bg-red-200 border rounded border-red-400 '>
            {state.message}
          </p>
        )}

        <button
          className='rounded p-2 bg-blue-200 hover:bg-blue-400 hover:text-white'
          type='submit'
        >
          Create
        </button>
      </div>
    </form>
  )
}
