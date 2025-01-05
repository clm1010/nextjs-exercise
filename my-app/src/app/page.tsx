'use client'
import React, { useEffect, useState } from 'react'

export default function Page() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('http://localhost:3000/api/todos', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const { data } = await res.json()
      console.log(data)
      setTodos(data)
    }
    fetchData()
  }, [])

  const handlerSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const res = await fetch('http://localhost:3000/api/todos', {
      method: 'POST',
      // headers: {
      //   'Content-Type': 'multipart/form-data;'
      // },
      body: new FormData(e.currentTarget)
    })

    const { data } = await res.json()
    setTodos(data)
    console.log(data)
  }
  return (
    <div className='container mx-auto flex flex-col items-center justify-center h-screen'>
      <form
        className='flex flex-col border border-gray-300 p-4 gap-2 rounded-md'
        onSubmit={handlerSubmit}
      >
        <input
          className='border border-gray-300 rounded-md'
          type='text'
          name='todo'
          placeholder='请输入待办事项'
        />
        <button
          className='border border-gray-300 hover:bg-blue-600 hover:text-white rounded-md'
          type='submit'
        >
          提交
        </button>
      </form>
      <ul className='leading-8 mt-4 border border-gray-300 p-2 w-800 rounded-md'>
        {todos.map((todo, index) => (
          <li className='border-b border-gray-200 w-full' key={index}>
            {todo}
          </li>
        ))}
      </ul>
    </div>
  )
}
