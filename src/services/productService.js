import axiosInstance from './axios.config'


const getAllProducts = async (params = { page: 1, limit: 10 }) => {
    try {
        const response = await axiosInstance.get('/api/products', { params })
        return response
    } catch (error) {
        throw error
    }
}

const createProduct = async (data) => {
    try {
        const response = await axiosInstance.post('/api/products', data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        return response
    } catch (error) {
        throw error
    }
}

export { getAllProducts, createProduct }