import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

import skyScene from '../assets/3d/sky.glb'

const Sky = () => {
    const { scene, animations } = useGLTF(skyScene)
    const skyRef = useRef()

    // useFrame((state, delta) => {
    //     if (skyRef.current) {
    //         skyRef.current.rotation.y += delta * 0.01
    //     }
    // })

    return (
        <mesh ref={skyRef} position={[-5, 2, 1]} scale={0.03} rotation={[0, 0, 0]}>
            <primitive object={scene} />
        </mesh>
    )
}

export default Sky