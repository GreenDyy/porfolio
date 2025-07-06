import { Button, Flex, Layout, message, Space, Typography } from 'antd'
import React from 'react'

const handleSetLocalStorage = () => {
    const obj = {
        name: 'John',
        age: 20,
        address: '123 Main St',
    }
    localStorage.setItem('test', JSON.stringify(obj))
    message.success('Set data vào Local Storage thành công')
}

const handleGetLocalStorage = (key) => {
    try {
        const data = localStorage.getItem(key)
        console.log('data trong local storage', JSON.parse(data))
    }
    catch (error) {
        console.log('error', ` ${key} Đây ko là JSON hợp lệ`)
    }


}

const handleDeleteLocalStorage = () => {
    localStorage.removeItem('test')
}
//xử lý cho Cooke
const handleSetCookie = () => {
    const obj = {
        name: 'John',
        age: 20,
        address: '123 Main St',
    }
    document.cookie = `test2=${JSON.stringify(obj)}; expires=${new Date(Date.now() + 24 * 60 * 60 * 1000).toUTCString()}; path=/;`
    message.success('Set data vào Cookie thành công')
}

const handleGetCookie = () => {
    const cookie = document.cookie
    console.log('cookie', cookie)
}

const handleDeleteCookie = () => {
    document.cookie = `test=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
    message.success('Xóa data từ Cookie thành công')
}



const TestCookie = () => {
    return (
        <Flex style={{ height: '100vh', width: '100vw', justifyContent: 'center', alignItems: 'center' }}>
            <Flex vertical style={{ width: '50%', border: '1px solid #000' }}>
                <Typography.Title>Local Storage</Typography.Title>
                <Space wrap style={{ width: '100%', padding: 10 }} title='cc'>
                    <Button onClick={handleSetLocalStorage}>Set data vào Local Storage</Button>
                    <Button onClick={() => handleGetLocalStorage('test')}>Get data từ Local Storage</Button>
                    <Button onClick={handleDeleteLocalStorage}>Xóa data từ Local Storage</Button>
                </Space>
            </Flex>
            <Flex vertical style={{ width: '50%', border: '1px solid #000' }}>
                <Typography.Title>Session Storage</Typography.Title>
                <Space wrap style={{ width: '100%', padding: 10 }} title='cc'>
                    <Button>Set data vào Session Storage</Button>
                    <Button>Get data từ Session Storage</Button>
                    <Button>Xóa data từ Session Storage</Button>
                </Space>
            </Flex>
            <Flex vertical style={{ width: '50%', border: '1px solid #000' }}>
                <Typography.Title>Cookie</Typography.Title>
                <Space wrap style={{ width: '100%', padding: 10 }} title='cc'>
                    <Button onClick={handleSetCookie}>Set data vào Cookie</Button>
                    <Button onClick={handleGetCookie}>Get data từ Cookie</Button>
                    <Button onClick={handleDeleteCookie}>Xóa data từ Cookie</Button>
                </Space>
            </Flex>
        </Flex>
    )
}

export default TestCookie