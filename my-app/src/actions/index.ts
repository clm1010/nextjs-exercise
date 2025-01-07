'use server'

import { db } from '@/db'
import { redirect } from 'next/navigation'

// Server Actions

/**
 * @description 删除
 * @param id
 */
export async function deleteSnippet(id: number) {
  await db.snippet.delete({
    where: { id }
  })

  return redirect('/')
}
