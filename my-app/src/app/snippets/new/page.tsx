import { db } from '@/db'
import React from 'react'
import { redirect } from 'next/navigation'

export default function Page() {
  const createSnippet = async (formData: FormData) => {
    'use server'
    const title = formData.get('title') as string
    const code = formData.get('code') as string
    console.log('title', title)
    console.log('code', code)

    const snippet = await db.snippet.create({
      data: {
        title,
        code
      }
    })
    console.log(snippet, 'snippet')
    // 服务端重定向，跳转到首页
    redirect('/')
  }

  return (
    <form action={createSnippet}>
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
          />
        </div>
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
