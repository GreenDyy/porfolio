import React from 'react'
import { Layout, Typography } from 'antd'
import './Header.scss'

const { Title } = Typography

function Header() {
    return (
        <Layout.Header className="header">
            <Title level={3} className="header-title">
                My Application
            </Title>
            <nav className="header-nav">
                <a href="/">Trang chủ</a>
                <a href="/about">Giới thiệu</a>
                <a href="/contact">Liên hệ</a>
            </nav>
        </Layout.Header>
    )
}

export default Header