import axios from 'axios'

const DEV_API_URL = 'http://localhost:4006'
const PROD_API_URL = 'https://api.example.com'

// Tạo instance axios với cấu hình cơ bản
const api = axios.create({
    baseURL: DEV_API_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    }
})

// Interceptor cho request
api.interceptors.request.use(
    (config) => {
        // Thêm token vào header nếu có
        const token = localStorage.getItem('token')
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

// Interceptor cho response
api.interceptors.response.use(
    (response) => {
        return response.data
    },
    (error) => {
        // Xử lý lỗi ở đây
        if (error.response) {
            // Lỗi từ server
            console.error('API Error:', error.response.data)
        } else if (error.request) {
            // Không nhận được response
            console.error('Network Error:', error.request)
        } else {
            // Lỗi khi setting up request
            console.error('Request Error:', error.message)
        }
        return Promise.reject(error)
    }
)

export default api 