import React from 'react'
import { Card } from 'antd'
import { data } from '@/data/index'

interface IParams {
  params: { id: string }
}

export async function generateMetadata({ params }: IParams) {
  const { id } = await params
  return {
    title: `Blog Desc - ${id}`
  }
}

export default async function Page({ params }: IParams) {
  const { id } = await params
  const item = data.find((item) => item.id === +id) // +id converts the string to a number
  return (
    <Card title={item?.title} bordered={true}>
      <p>{item?.body}</p>
    </Card>
  )
}
