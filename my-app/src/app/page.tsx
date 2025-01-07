import { db } from '@/db'
import Link from 'next/link'

export default async function Page() {
  const snippets = await db.snippet.findMany()
  console.log(snippets)
  return (
    <>
      <div className='flex items-center justify-between mt-4'>
        <h1 className='font-bold text-lg'>Snippets</h1>
        <Link
          className='border border-gray-400 rounded p-2 hover:bg-blue-400 hover:text-white hover:border-blue-400'
          href='/snippets/new'
        >
          New Snippet
        </Link>
      </div>
      <div className='flex flex-col gap-2 mt-4'>
        {snippets.map((snippet) => (
          <Link
            key={snippet.id}
            className='flex items-center justify-between border border-gray-400 p-2 rounded hover:text-blue-400'
            href={`/snippets/${snippet.id}`}
          >
            <span>{snippet.title}</span>
            <span>View</span>
          </Link>
        ))}
      </div>
    </>
  )
}
