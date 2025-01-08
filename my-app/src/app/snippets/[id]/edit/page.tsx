import { db } from '@/db'
import { notFound } from 'next/navigation'
import React from 'react'
import SnippetEditForm from '@/components/snippet-edit-form'

interface PageProps {
  params: {
    id: string
  }
}

export default async function Page({ params }: PageProps) {
  // const { id } = await params
  const id = parseInt(params.id)
  if (isNaN(id)) return notFound()

  const snippet = await db.snippet.findFirst({
    where: { id }
  })

  // console.log(snippet, '🚀🚀🚀 - snippet')

  if (!snippet) {
    // return <div>Snippet not found</div>
    return notFound()
  }
  return (
    <div className='flex items-center justify-between mt-4'>
      <SnippetEditForm snippet={snippet} />
    </div>
  )
}
