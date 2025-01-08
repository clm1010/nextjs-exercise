'use server'

import { db } from '@/db'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
// import { sleep } from '@/utils'
import { z } from 'zod'

// const schema = z
//   .string()
//   .min(2, { message: '长度必须为 2 个或更多字符' })
//   .max(5, { message: '长度不得超过 5 个字符' })
const verifyTitle = z
  .string()
  .trim()
  .min(1, { message: 'Title 长度必须为 1 个或更多字符' })
  .max(400, { message: 'Title 长度不得超过 400 个字符' })
const verifyCode = z
  .string()
  .trim()
  .min(1, { message: 'Code 长度必须为 1 个或更多字符' })
  .max(10000, { message: 'Code 长度不得超过 10000 个字符' })

// Server Actions

/**
 * @description 删除  Server Actions
 * @param id
 */
export async function deleteSnippet(id: number) {
  try {
    await db.snippet.delete({
      where: { id }
    })
  } catch (error) {
    if (error instanceof Error) {
      return { message: error.message }
    }
    return { message: 'Something went wrong' }
  }
  // 重新验证清除缓存，渲染
  revalidatePath('/')
  redirect('/')
}

/**
 * @description 编辑 Server Actions
 * @param id
 * @param code
 * @returns 返回详情页
 */
export async function editSnippet(
  prevState: { message: string },
  id: number,
  code: string
) {
  try {
    // 测试抛出异常
    // throw new Error('😭')
    await db.snippet.update({
      where: { id },
      data: { code }
    })
  } catch (error) {
    if (error instanceof Error) {
      return { message: error.message }
    }
    return { message: 'Something went wrong' }
  }
  // 重新验证清除缓存，渲染
  revalidatePath('/snippets/' + id)
  redirect('/snippets/' + id)
}

/**
 * @description 创建 Server Actions
 * @param prevState
 * @param formData
 * @returns 返回详情页
 */
export async function createSnippet(
  prevState: { message: string },
  formData: FormData
) {
  // await sleep(3000)
  try {
    // const rawFormData = Object.fromEntries(formData)
    // $ACTION_ID_ 区分不同的表单
    // console.log(rawFormData)
    const title = formData.get('title') as string
    const code = formData.get('code') as string

    // 校验表单数据
    const validateFieldsTitle = verifyTitle.safeParse(title)
    // console.log(validateFieldsTitle, 'validateFieldsTitle')
    if (!validateFieldsTitle.success) {
      return {
        ...prevState,
        message: validateFieldsTitle.error.flatten().formErrors.toString()
      }
    }
    const validateFieldsCode = verifyCode.safeParse(code)
    if (!validateFieldsCode.success) {
      return {
        ...prevState,
        message: validateFieldsCode.error.flatten().formErrors.toString()
      }
    }

    // 测试抛出异常
    // throw new Error('😭')

    const snippet = await db.snippet.create({
      data: {
        title,
        code
      }
    })
    console.log(snippet, 'snippet')
  } catch (error) {
    if (error instanceof Error) {
      return { message: error.message }
    } else {
      return { message: 'Something went wrong!' }
    }
  }
  // 重新验证清除缓存，渲染
  revalidatePath('/')
  redirect('/')
}
