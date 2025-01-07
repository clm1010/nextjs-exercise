import { PrismaClient } from '@prisma/client'

export const db = new PrismaClient()

// 测试添加数据
// db.snippet
//   .create({
//     data: {
//       title: 'React',
//       code: 'console.log("hello world")'
//     }
//   })
//   .then((snippet) => console.log(snippet))
