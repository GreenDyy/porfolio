import axiosInstance from './axios.config'

const login = async (data) => {
    try {
        const response = await axiosInstance.post('/api/auth/login', data)
        return response
    } catch (error) {
        // Log lỗi để debug
        console.error('Login API Error:', error)
        
        // Throw lại error để component có thể xử lý
        throw error
    }
}

const register = async (data) => {
    try {
        const response = await axiosInstance.post('/api/auth/register', data)
        return response
    } catch (error) {
        console.error('Register API Error:', error)
        throw error
    }
}

export { login, register }
