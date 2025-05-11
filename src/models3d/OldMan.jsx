import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

import oldManScene from '../assets/3d/oldMan.glb'

const OldMan = (props) => {
    const { scene, animations } = useGLTF(oldManScene)
    const { isRotating, setIsRotating } = props
    const oldManRef = useRef()
    const { actions } = useAnimations(animations, oldManRef)

    useEffect(() => {
        // if (oldManRef.current && isRotating) {
        //     actions['Take 001'].play()
        // }

    }, [isRotating])

    useFrame((state, delta) => {
        if (oldManRef.current) {
            // Lấy vị trí chuột trong không gian 3D
            const mouseX = state.mouse.x
            const mouseY = state.mouse.y

            // Tính toán góc quay dựa trên vị trí chuột
            const rotationY = mouseX * Math.PI * 0.5 // Góc quay ngang
            const rotationX = mouseY * Math.PI * 0.25 // Góc quay dọc

            // Áp dụng rotation cho model với smooth transition
            oldManRef.current.rotation.y += (rotationY - oldManRef.current.rotation.y) * 0.1
            oldManRef.current.rotation.x += (rotationX - oldManRef.current.rotation.x) * 0.1
        }
    })

    return (
        <mesh ref={oldManRef} position={[0, 0, 0]} scale={0.009}>
            <primitive object={scene} />
        </mesh>
    )
}

export default OldMan