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
        // if (modelRef.current && isRotating) {
        //     actions['Take 001'].play()
        // }
        // console.log('actions', typeof actions)
        console.log('isPlayAction', isPlayAction)
        if (isPlayAction) {
            actions['Take 001'].play()
        }
        if (!isPlayAction) {
            actions['Take 001'].stop()
        }

    }, [isPlayAction])

    useFrame((state, delta) => {
        if (modelRef.current && isRotating) {
            modelRef.current.rotation.y += delta * 0.5
        }
        if (isPlayAction) {
            angleRef.current += delta * 0.5 // tốc độ bay quanh, có thể chỉnh
            const x = Math.cos(angleRef.current) * radius
            const z = Math.sin(angleRef.current) * radius
            modelRef.current.position.x = x
            modelRef.current.position.z = z
            modelRef.current.position.y = 2 + Math.sin(angleRef.current * 2) // hiệu ứng bay lên/xuống
            modelRef.current.rotation.y = -angleRef.current // quay đầu theo hướng bay
        }
    })

    return (
        <mesh ref={modelRef} position={[-2, 0, 1]} scale={0.003}>
            <primitive object={scene} />
        </mesh>
    )
}

export default Phoenix