import React, { useState, useEffect, useRef } from 'react'
import { Card, Flex, message, Typography } from 'antd'
import { getAllProducts, createProduct } from '../../services/productService'

const TestUpload = () => {
    const formRef = useRef(null)
    const [selectedFiles, setSelectedFiles] = useState([])
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await getAllProducts()
            setProducts(res?.data)
        }
        fetchProducts()
    }, [])

    const handleSubmitData = async (e) => {
        const dataForm = e.target
        e.preventDefault()
        const formData = new FormData()
        formData.append('name', dataForm.name.value)
        formData.append('price', dataForm.price.value)
        formData.append('description', dataForm.description.value)
        formData.append('file', selectedFiles[0])
        console.log('data truoc khi submit: ', Object.fromEntries(formData))
        try {
            const res = await createProduct(formData)
            console.log('res: ', res?.data)
            message.success('Thêm sản phẩm thành công')
            //clear toàn bộ form
            formRef.current.reset()
        } catch (error) {
            message.error('Có lỗi xảy ra: ', error.message)
        }
        // console.log(res)
    }


    return (
        <Flex vertical gap={10} style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <h1>Test Upload</h1>
            <form ref={formRef} style={{ display: 'flex', flexDirection: 'column', gap: 10 }} onSubmit={handleSubmitData}>
                <label htmlFor="name">Tên <span style={{ color: 'red' }}>*</span></label>
                <input name="name" id="name" type="text" placeholder='Nhập tên' required />
                <label htmlFor="price">Giá <span style={{ color: 'red' }}>*</span></label>
                <input name="price" id="price" type="number" placeholder='Nhập giá' required />
                <label htmlFor="description">Mô tả</label>
                <textarea
                    name="description"
                    id="description"
                    placeholder='Nhập mô tả'
                    style={{ minHeight: '100px' }}
                />
                <label htmlFor="file">File</label>
                <input
                    required
                    name="file"
                    id="file"
                    type="file"
                    onChange={(e) => {
                        console.log(e.target.files[0])
                        setSelectedFiles([...selectedFiles, e.target.files[0]])
                    }}
                />
                <button type="submit">Submit</button>
            </form>

            {/* list product */}
            <Typography.Title level={2}>Danh sách sản phẩm</Typography.Title>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(250px, 1fr))', gap: '16px', width: '100%', padding: '16px' }}>
                {products.map((product) => (
                    <Card key={product.id} hoverable style={{ width: '100%' }}>
                        <img src={process.env.REACT_APP_API_URL + '/uploads/products/' + product.file} alt={product.name}
                            style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
                        <Card.Meta
                            title={product.name}
                            description={product.description}
                        />
                        <div style={{ marginTop: '12px' }}>
                            <Typography strong>Giá: </Typography>
                            <Typography>{product.price?.toLocaleString('vi-VN')} VNĐ</Typography>
                        </div>
                    </Card>
                ))}
            </div>
        </Flex>
    )
}

export default TestUpload