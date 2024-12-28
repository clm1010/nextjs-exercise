import React from 'react'
import Link from 'next/link'
export default function page() {
  return (
    <div className='container  mx-auto'>
      <div className='flex space-x-4 pt-4 pb-4'>
        <Link href='/'>Home</Link>
        <Link href='/blog'>Blog List</Link>
      </div>
    </div>
  )
}
