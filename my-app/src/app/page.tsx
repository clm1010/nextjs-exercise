import { addTodo, getTodos } from '@/actions'
import ClientButton from '@/components/client-button'
import SubmitButton from '@/components/submit-button'

/**
 * @description 使用 useFormStatus hook 提交状态
 */
export default async function Page() {
  const todos = await getTodos()
  return (
    <div className='container mx-auto flex flex-col items-center justify-center h-screen'>
      <div className='flex justify-center items-end'>
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
          <SubmitButton />
        </form>
        <ClientButton>牛牛</ClientButton>
      </div>
      <ul className='leading-8 mt-4 border border-gray-300 p-2 w-800 rounded-md'>
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
