import React, { useState, useRef } from 'react'
import './SignUp.scss'
import { message } from 'antd'
import { register } from '../../services/authService'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
    const formRef = useRef(null)
    const navigate = useNavigate()
    const [confirmPassword, setConfirmPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        try {
            const formData = new FormData(formRef.current)
            const dataSignUp = Object.fromEntries(formData)

            // Validate data
            if (!dataSignUp.username || !dataSignUp.email || !dataSignUp.password || !confirmPassword) {
                message.error('Vui lòng điền đầy đủ thông tin')
                return
            }

            if (dataSignUp.username.length < 3) {
                message.error('Tên đăng nhập phải có ít nhất 3 ký tự')
                return
            }

            if (dataSignUp.password.length < 6) {
                message.error('Mật khẩu phải có ít nhất 6 ký tự')
                return
            }

            if (dataSignUp.password !== confirmPassword) {
                message.error('Mật khẩu xác nhận không khớp')
                return
            }

            // Validate email format
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            if (!emailRegex.test(dataSignUp.email)) {
                message.error('Email không hợp lệ')
                return
            }

            console.log('dataSignUp', dataSignUp)

            // Call API
            const res = await register(dataSignUp)
            console.log('SignUp response:', res)

            if (res.success || res.token) {
                message.success(res.message || 'Đăng ký thành công!')
                // Có thể tự động đăng nhập sau khi đăng ký thành công
                if (res.token) {
                    localStorage.setItem('token', res.token)
                    localStorage.setItem('user', JSON.stringify(res.user))
                    navigate('/')
                } else {
                    navigate('/login')
                }
            } else {
                message.error(res.message || 'Đăng ký thất bại')
            }

            formRef.current.reset()
            setConfirmPassword('')
        } catch (error) {
            console.log('SignUp error:', error)

            // Xử lý lỗi từ server
            if (error.response) {
                message.error(error.response?.data?.message || 'Đăng ký thất bại')
            } else if (error.request) {
                message.error('Không thể kết nối đến server')
            } else {
                message.error('Đã xảy ra lỗi')
            }
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className='signup-container'>
            <div className='signup-form'>
                <h1>Đăng Ký</h1>
                <form onSubmit={handleSubmit} ref={formRef}>
                    <div>
                        <label htmlFor="username">Tên đăng nhập</label>
                        <input type="text" id="username" name="username" placeholder="Nhập tên đăng nhập" disabled={isLoading} />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="Nhập email" disabled={isLoading} />
                    </div>
                    <div>
                        <label htmlFor="fullname">Họ và tên</label>
                        <input type="text" id="fullname" name="fullname" placeholder="Nhập họ và tên" disabled={isLoading} />
                    </div>
                    <div>
                        <label htmlFor="password">Mật khẩu</label>
                        <input type="password" id="password" name="password" placeholder="Nhập mật khẩu" disabled={isLoading} />
                    </div>
                    <div>
                        <label htmlFor="confirmPassword">Xác nhận mật khẩu</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            placeholder="Nhập lại mật khẩu"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            disabled={isLoading}
                        />
                    </div>
                    <button type="submit" disabled={isLoading}>
                        {isLoading ? 'Đang xử lý...' : 'Đăng Ký'}
                    </button>
                    <div className="auth-links">
                        <span>Đã có tài khoản? </span>
                        <button type="button" onClick={() => navigate('/login')} disabled={isLoading}>Đăng nhập</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp 