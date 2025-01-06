import { getTodos } from '@/actions'
import SubmitForm from '@/components/submit-form'

/**
 * @description 使用 useFormStatus hook 提交状态
 */
export default async function Page() {
  const todos = await getTodos()
  return (
    <div className='container mx-auto flex flex-col items-center justify-center h-screen'>
      <div className='flex justify-center items-end'>
        <SubmitForm />
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
