import React, { Suspense, useState, useEffect, useContext } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Loader from '../../components/loader/Loader'
import Car3D from '../../models3d/Car3D'
import SeeHouse3D from '../../models3d/SeeHouse'
import './Test.scss'
import { useNavigate } from 'react-router-dom'
import Sky from '../../models3d/Sky'
import Header from '../../components/Header/Header'
import OldMan from '../../models3d/OldMan'
import { Button, message, Table } from 'antd'
import Message from '../../components/Message/Message'
import AuthContext from '../../contexts/AuthContext'
import Phoenix from '../../models3d/Phoenix'
import { use } from 'react'
import Infor from '../../components/Infor/Infor'
import MouseFollower from '../../components/MouseFollower'
import PlaySong from '../../components/PlaySong/PlaySong'

const Test = () => {
    const [isRotating, setIsRotating] = useState(false)
    const navigate = useNavigate()
    const [isPlayAction, setIsPlayAction] = useState(false)
    const [currentState, setCurrentState] = useState('1')

    useEffect(() => {
        // console.log('isRotating', isRotating)
    }, [isRotating])

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
                <Button
                    style={{ cursor: 'pointer', margin: '20px', color: 'green' }}
                    onClick={() => {
                        setIsPlayAction(!isPlayAction)
                        // console.log('isPlayAction', isPlayAction)
                    }}
                >
                    {isPlayAction ? 'Dừng bay' : 'Chim bay nè'}
                </Button>
                <Button
                    style={{
                        cursor: 'pointer',
                        margin: '20px',
                        color: 'white',
                        backgroundColor: '#4CAF50',
                        position: 'fixed',
                        top: '30px',
                        left: '10px',
                        padding: '10px 20px',
                        borderRadius: '8px',
                        fontWeight: 'bold',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                        border: 'none',
                        zIndex: 1000,
                        transition: 'all 0.3s ease'
                    }}
                    onClick={() => navigate('/')}
                >
                    Về trang chủ
                </Button>


                <Canvas
                    style={{ marginTop: '100px' }}
                    className='w-full h-full'
                    camera={{ near: 0.1, far: 100 }}
                    gl={{ preserveDrawingBuffer: true }}
                >
                    <Suspense fallback={<Loader />}>
                        <directionalLight position={[1, 1, 1]} intensity={2} />
                        <ambientLight intensity={4} />
                        <hemisphereLight intensity={1} groundColor="black" skyColor="green" />
                        <Sky />
                        {/* <MouseFollower /> */}
                        <Car3D
                            isRotating={isRotating}
                            setIsRotating={setIsRotating}
                            setCurrentState={setCurrentState}
                        />

                        {/* <OldMan
                            isRotating={isRotating}
                            setIsRotating={setIsRotating}
                        /> */}
                        <Phoenix
                            isRotating={isRotating}
                            setIsRotating={setIsRotating}
                            isPlayAction={isPlayAction}
                        />
                        {/* <SeeHouse3D
                            scale={screenScale}
                            position={screenPosition}
                            rotation={rotation}
                            isRotating={isRotating}
                            setIsRotating={setIsRotating}
                        /> */}

                    </Suspense>

                </Canvas>

                {/* show info */}
                {currentState && <Infor currentState={currentState} />}

                {/* <PlaySong /> */}
            </div>


        </>
    )
}

export default Test