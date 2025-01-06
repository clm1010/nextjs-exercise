'use server'

// import { revalidatePath, revalidateTag } from 'next/cache'
import { revalidatePath } from 'next/cache'

// const data = ['吃饭', '睡觉', '打豆豆']
const data = [
  { id: 1, todo: '吃饭' },
  { id: 2, todo: '睡觉' },
  { id: 3, todo: '打豆豆' }
]

/**
 * @description 获取待办事项
 * @returns data
 */
export async function getTodos() {
  return data
}

/**
 * @description 添加待办事项
 * @description 例子：如果需要结合表单传递其他数据
 * @param userId
 * @param formData
 */
// export async function addTodo(userId: string, formData: FormData) {
//   // 通过 Object.fromEntries 获取 formData 表单 全部数据
//   const rawFormData = Object.fromEntries(formData)
//   // $ACTION_ID_ 区分不同的表单
//   console.log(rawFormData)
//   console.log(userId, '🐮')
//   const todo = formData.get('todo') as string
//   // data.push(todo)
//   data.push({ id: data.length + 1, todo })
//   console.log(data)
//   // 您可以使用 revalidatePath 路径方式 重新验证
//   revalidatePath('/')
//   // 或者使用 revalidateTag  标签方式 重新验证
//   // revalidateTag('todos')
// }

/**
 * @description 添加待办事项
 * @param formData
 */
export async function addTodo(formData: FormData) {
  // 通过 Object.fromEntries 获取 formData 表单 全部数据
  const rawFormData = Object.fromEntries(formData)
  // $ACTION_ID_ 区分不同的表单
  console.log(rawFormData)
  const todo = formData.get('todo') as string
  // data.push(todo)
  data.push({ id: data.length + 1, todo })
  console.log(data)
  // 您可以使用 revalidatePath 路径方式 重新验证
  revalidatePath('/')
  // 或者使用 revalidateTag  标签方式 重新验证
  // revalidateTag('todos')
}
