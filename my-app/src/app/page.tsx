import Link from 'next/link'
import React from 'react'

export default function Page() {
  return (
    <div className='container mx-auto flex justify-center gap-4 h-screen items-center flex-col'>
      <h1>Home</h1>
      <Link className='text-blue-600 hover:underline' href='/a'>访问/a</Link>
    </div>
  )
}
