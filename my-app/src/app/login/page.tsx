'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import type { FormProps } from 'antd'
import { Button, Form, Input } from 'antd'

type FieldType = {
  login?: string
  password?: string
}

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo)
}

const Page: React.FC = () => {
  const router = useRouter()

  const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
    const r = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    })
    const data = await r.json()
    console.log('Success:', data)
    router.push('/dashboard')
  }

  return (
    <div className='container mx-auto flex items-center justify-center pt-48'>
      <Form
        className='w-96'
        name='basic'
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete='off'
      >
        <Form.Item<FieldType>
          label='用户名'
          name='login'
          initialValue='admin'
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label='密码'
          name='password'
          initialValue='123123'
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item label={null}>
          <Button type='primary' htmlType='submit' block>
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
export default Page
