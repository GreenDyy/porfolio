import api from './axios.config'

// Service cho Product
// const ProductService = {}

export const getAllProducts = async (params = { page: 1, limit: 10 }) => {
    try {
        const response = await api.get('/api/products', { params })
        return response
    } catch (error) {
        throw error
    }
}

export const createProduct = async (data) => {
    try {
        const response = await api.post('/api/products', data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        return response
    } catch (error) {
        throw error
    }
}

