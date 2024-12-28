import React from 'react'
import type { Metadata } from 'next'
import BlogList from '@/components/BlogList'

export const metadata: Metadata = {
  title: 'Blog List'
}
export default function Page() {
  return <BlogList></BlogList>
}
