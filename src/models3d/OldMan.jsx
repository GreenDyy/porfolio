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
        if (oldManRef.current && isRotating) {
        }
    })

    return (
        <mesh ref={oldManRef} position={[-2, 0, 1]} scale={0.009}>
            <primitive object={scene} />
        </mesh>
    )
}

export default OldMan