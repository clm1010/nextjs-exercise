import { PrismaClient } from '@prisma/client'

export const db = new PrismaClient()

db.snippet
  .create({
    data: {
      title: 'React',
      code: 'console.log("hello world")'
    }
  })
  .then((snippet) => console.log(snippet))
