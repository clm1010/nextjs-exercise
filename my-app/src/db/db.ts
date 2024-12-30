import { JSONFilePreset } from 'lowdb/node'

interface IPosts {
  id: string
  title: string
  content: string
}

const defaultData: { posts: IPosts[] } = {
  posts: []
}
const db = await JSONFilePreset('db.json', defaultData)

export default db
