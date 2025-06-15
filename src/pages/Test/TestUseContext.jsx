import { Button, Flex, Form, Input } from 'antd'
import React, { useContext } from 'react'
import AuthContext from '../../contexts/AuthContext'

function TestUseContext() {
  const { name, setNameCustomer } = useContext(AuthContext);
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    console.log('Tên đã nhập:', values.name);
    setNameCustomer(values.name);
    form.resetFields();
  }

  return (
    <Flex vertical gap={10} style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
      <div>Current name: {name}</div>
      <Form form={form} onFinish={handleSubmit}>
        <Form.Item
          name="name"
          rules={[{ required: true, message: 'Vui lòng nhập tên!' }]}
        >
          <Input placeholder="Nhập tên của bạn" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Flex>
  )
}

export default TestUseContext