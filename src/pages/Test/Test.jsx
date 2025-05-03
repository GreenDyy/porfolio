import React, { Suspense, useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Loader from '../../components/loader/Loader'
import Car3D from '../../models3d/car'
import SeeHouse3D from '../../models3d/SeeHouse'
import './Test.scss'
import { useNavigate } from 'react-router-dom'
import Sky from '../../models3d/Sky'
import Header from '../../components/Header/Header'
import { Button, message, Table } from 'antd'
import { testMockData, testMockDataPostMethod } from '../Home/services'

const Test = () => {
    const navigate = useNavigate()
    const [dataSource, setDataSource] = useState([])
    const [loading, setLoading] = useState(false)
    const adjustSeeHouseForScreenSize = () => {
        let screenScale = null
        let screenPosition = [0, -6.5, -43]
        let rotation = [0.1, 4.7, 0]

        if (window.innerWidth < 768) {
            screenScale = [0.05, 0.05, 0.05]
        } else {
            screenScale = [0.1, 0.1, 0.1]
        }
        return { screenScale, screenPosition, rotation }
    }
    const columns = [
        {
            title: 'Id',
            dataIndex: 'id', 
            key: 'id'
        },
        {
            title: 'Tên mèo',
            dataIndex: 'ten_meo',
            key: 'ten_meo'
        },
        {
            title: 'Màu lông',
            dataIndex: 'mau_long',
            key: 'mau_long'
        },
        {
            title: 'Tính cách',
            dataIndex: 'tinh_cach',
            key: 'tinh_cach'
        },
        {
            title: 'Cân nặng',
            dataIndex: 'can_nang_kg',
            key: 'can_nang_kg'
        },
        {
            title: 'Tuổi',
            dataIndex: 'tuoi_nam',
            key: 'tuoi_nam'
        }
    ]

    const testMockDataN8N = async () => {
        setDataSource([])
        setLoading(true)
        try {
            // const res = await testMockData()
            const res = await testMockDataPostMethod({ chatInput: 'Hello World' })
            console.log('mock_data_ne:', res)
            message.success('Get mock data success')
            setDataSource(res?.data?.cats)
        } catch (error) {
            message.error('Error when get mock data')
            console.log('error:', error)
        } finally {
            setLoading(false)
        }

    }

    const { screenScale, screenPosition, rotation } = adjustSeeHouseForScreenSize()

    return (
        <>
            <Header />
            <div className="test-container">
                <Button style={{ cursor: 'pointer', margin: '20px', color: 'green' }} onClick={() => testMockDataN8N()}>Test mock data</Button>
                <Button style={{ cursor: 'pointer', margin: '20px', color: 'green' }} loading={true} onClick={() => navigate('/')}>Back home</Button>
                <Table 
                loading={loading}
                 dataSource={dataSource}
                  columns={columns}
                  pagination={
                    {
                        pageSize: 10,
                        total: dataSource.length,
                        showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
                        // showSizeChanger: true,
                        // showQuickJumper: true,
                    }
                  }
                  />
                <Canvas
                    className='w-full h-full'
                    camera={{ near: 0.1, far: 100 }}
                    gl={{ preserveDrawingBuffer: true }}
                >
                    <Suspense fallback={<Loader />}>
                        <directionalLight position={[1, 1, 1]} intensity={2} />
                        <ambientLight intensity={4} />
                        <hemisphereLight intensity={1} groundColor="black" skyColor="green" />
                        <Sky />
                        <Car3D />
                        {/* <SeeHouse3D
                        scale={screenScale}
                        position={screenPosition}
                        rotation={rotation}
                    /> */}
                    </Suspense>

                </Canvas>
            </div>
        </>
    )
}

export default Test