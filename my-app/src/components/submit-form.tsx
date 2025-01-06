'use client'
import { addTodo } from '@/actions'
// React 19.0.0 以后 使用 useActionState
import React, { useActionState } from 'react'
// React 19.0.0 以前 使用 useFormState
// import { useFormState } from 'react-dom'
import SubmitButton from '@/components/submit-button'
import ClientButton from '@/components/client-button'

const initialState = {
  message: ''
}
export default function SubmitForm() {
  // useFormState(参数1：Server Action, 参数2：初始值)
  // const [state, formAction] = useFormState(addTodo, initialState)
  // useActionState (参数1：Server Action, 参数2：初始值)
  const [state, formAction] = useActionState(addTodo, initialState)
  return (
    <div className='flex justify-center items-end'>
      <div>
        <form
          className='flex flex-col border border-gray-300 p-4 gap-2 rounded-md'
          action={formAction}
        >
          <input
            className='border border-gray-300 rounded-md'
            type='text'
            name='todo'
            placeholder='请输入待办事项'
            required
          />
          <input
            className='border border-gray-300 rounded-md'
            type='Password'
            name='pwd'
            placeholder='Password'
            required
          />
          <SubmitButton />
        </form>
        <p className='text-gray-500'>{state.message}</p>
      </div>
      <ClientButton>牛牛</ClientButton>
    </div>
  )
}
