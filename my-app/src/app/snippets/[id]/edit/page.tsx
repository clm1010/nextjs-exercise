import { db } from '@/db'
import { notFound } from 'next/navigation'
import React from 'react'

interface PageProps {
  params: {
    id: string
  }
}

export default async function Page({ params }: PageProps) {
  const { id } = await params
  console.log(+id)
  const snippet = await db.snippet.findFirst({
    where: { id: +id }
  })

  if (!snippet) {
    // return <div>Snippet not found</div>
    return notFound()
  }
  return <div>Hello</div>
}
