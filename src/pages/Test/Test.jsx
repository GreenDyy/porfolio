import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Loader from '../../components/loader/Loader'
import Car3D from '../../models3d/car'
import SeeHouse3D from '../../models3d/SeeHouse'
import './Test.scss'
import { useNavigate } from 'react-router-dom'
import Sky from '../../models3d/Sky'
import Header from '../../components/Header/Header'
import { Button } from 'antd'

const Test = () => {
    const navigate = useNavigate()
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

    const { screenScale, screenPosition, rotation } = adjustSeeHouseForScreenSize()

    return (
        <>
            <Header />
            <div className="test-container">
                <Button style={{ cursor: 'pointer', margin: '20px', color: 'green' }} loading={true} onClick={() => navigate('/')}>Back home</Button>
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