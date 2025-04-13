import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Loader from '../../components/loader/Loader'
import Car3D from '../../models3d/car'
import './Test.scss'
import { useNavigate } from 'react-router-dom'

const Test = () => {
    const navigate = useNavigate()
    return (
        <div className="test-container">
            <button onClick={() => navigate('/')}>Back home</button>
            <Canvas
                className='w-full h-full'
                camera={{ near: 0.1, far: 100 }}
                gl={{ preserveDrawingBuffer: true }}
            >
                <Suspense fallback={<Loader />}>
                    <directionalLight position={[10, 10, 10]} intensity={1} />
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} intensity={1} />
                    <spotLight position={[10, 15, 10]} angle={0.1} penumbra={1} intensity={1} shadow-mapSize={[512, 512]} />
                    <hemisphereLight intensity={0.5} groundColor="black" />

                    <Car3D />
                </Suspense>

            </Canvas>
        </div>
    )
}

export default Test