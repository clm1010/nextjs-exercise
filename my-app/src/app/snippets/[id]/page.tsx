import React from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { db } from '@/db'
import { sleep } from '@/utils'
import SnippetDelButton from '@/components/snippet-del-button'
// import { deleteSnippet } from '@/actions'

interface SnippetShowPageProps {
  params: { id: string }
}

export default async function Page(props: SnippetShowPageProps) {
  await sleep(2000)
  const { id } = await props.params
  console.log(id)
  const snippet = await db.snippet.findFirst({
    where: {
      id: parseInt(id)
    }
  })

  // 第二种方式 使用 form 表单结合 Server Actions 删除
  // const deleteSnippetWithId = deleteSnippet.bind(null, parseInt(id))

  if (!snippet) {
    // return <div>Snippet not found</div>
    return notFound()
  }
  return (
    <>
      <div className='flex items-center justify-between mt-4'>
        <h1 className='font-bold text-lg'>{snippet.title}</h1>
        <div className='flex gap-4'>
          <Link
            className='border border-gray-400 rounded p-2 hover:bg-blue-400 hover:text-white hover:border-blue-400'
            href={`/snippets/${id}/edit`}
          >
            Edit
          </Link>
          {/* 第一种方式 使用组件点击删除 */}
          <SnippetDelButton id={+id} />
          {/* 第二种方式 使用 form 表单结合 Server Actions 删除 */}
          {/* <form action={deleteSnippetWithId}>
            <button className='border border-gray-400 rounded p-2 hover:bg-blue-400 hover:text-white hover:border-blue-400'>
              Delete
            </button>
          </form> */}
        </div>
      </div>
      <pre className='p-2 border border-gray-200 rounded bg-gray-200 mt-6'>
        <code>{snippet.code}</code>
      </pre>
    </>
  )
}
