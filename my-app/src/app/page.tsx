import { addTodo, getTodos } from '@/actions'
import ClientButton from '@/components/client-button'
// 例子：如果需要结合表单传递其他数据
// const userId = '888'

/**
 * @description Server Action 配合其他方式使用，客户端下沉 减少打包体积 使用演示
 */
export default async function Page() {
  const todos = await getTodos()
  // 例子:如果需要结合表单传递其他数据 第二种写法
  // const addTodoWithOther = addTodo.bind(null, userId)
  return (
    <div className='container mx-auto flex flex-col items-center justify-center h-screen'>
      <div className='flex justify-center items-end'>
        {/* 例子:如果需要结合表单传递其他数据 第二种写法 */}
        {/* <form
        className='flex flex-col border border-gray-300 p-4 gap-2 rounded-md'
        action={addTodoWithOther}
      > */}
        {/* 例子:如果需要结合表单传递其他数据 第一种写法 */}
        {/* <form
        className='flex flex-col border border-gray-300 p-4 gap-2 rounded-md'
        action={async (formData) => {
          'use server'
          await addTodo(userId, formData)
        }}
      > */}
        {/* React 拓展了 form 标签action的能力，可以给action指定一个 Server Action */}
        {/* 第一种写法 action={addTodo} */}
        <form
          className='flex flex-col border border-gray-300 p-4 gap-2 rounded-md'
          action={addTodo}
        >
          <input
            className='border border-gray-300 rounded-md'
            type='text'
            name='todo'
            placeholder='请输入待办事项'
          />
          <input
            className='border border-gray-300 rounded-md'
            type='Password'
            name='pwd'
            placeholder='Password'
          />
          {/* 第二种写法 formAction={addTodo} */}
          <button
            className='border border-gray-300 hover:bg-blue-600 hover:text-white rounded-md'
            type='submit'
            // formAction={addTodo}
          >
            提交
          </button>
        </form>
        <ClientButton>牛牛</ClientButton>
      </div>
      <ul className='leading-8 mt-4 border border-gray-300 p-2 w-800 rounded-md'>
        {/* {todos.map((todo, index) => (
          <li key={index} className='border-b border-gray-200 w-full'>
            {todo}
          </li>
        ))} */}
        {todos.map((item, index) => (
          <li
            key={item.id || index}
            className='border-b border-gray-200 w-full'
          >
            {item.todo}
          </li>
        ))}
      </ul>
    </div>
  )
}
