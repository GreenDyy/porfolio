import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

import phoenixScene from '../assets/3d/phoenix.glb'

const Phoenix = (props) => {
    const { scene, animations } = useGLTF(phoenixScene)
    const { isRotating, setIsRotating, isPlayAction } = props
    const modelRef = useRef()
    const { actions } = useAnimations(animations, modelRef)
    const angleRef = useRef(0)
    const radius = 5 // Bán kính quỹ đạo, có thể chỉnh

    useEffect(() => {
        if (modelRef.current) {
            actions['Take 001'].play()
        }
        // console.log('actions', typeof actions)

        // actions['Take 001'].play()

    }, [])

    useFrame(({ clock, camera }, delta) => {
        if (!modelRef.current) return;

        // Tạo hiệu ứng chim bay lên xuống theo thời gian
        modelRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2

        // Kiểm tra vị trí của chim so với camera để xoay chim
        if (modelRef.current.position.x > camera.position.x + 10) {
            modelRef.current.rotation.y = Math.PI // Xoay chim 180 độ khi bay quá xa bên phải
        } else if (modelRef.current.position.x < camera.position.x - 10) {
            modelRef.current.rotation.y = 0 // Đặt lại hướng ban đầu khi bay quá xa bên trái
        }

        // Di chuyển chim theo hướng xoay
        if (modelRef.current.rotation.y === 0) {
            modelRef.current.position.x += 0.01 // Bay sang phải
            modelRef.current.position.z -= 0.01 // Bay vào trong
        } else {
            modelRef.current.position.x -= 0.01 // Bay sang trái
            modelRef.current.position.z += 0.01 // Bay ra ngoài
        }
    })

    return (
        <mesh ref={modelRef} position={[-2, 0, 1]} scale={0.003} {...props}>
            <primitive object={scene} />
        </mesh>
    )
}

export default Phoenix