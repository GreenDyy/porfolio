import React from 'react'
import { useGLTF } from '@react-three/drei'

import skyScene from '../assets/3d/sky.glb'

const Sky = () => {
    const { scene, animations } = useGLTF(skyScene)

    return (
        <mesh position={[-5,2, 1]} scale={1                                                                     }>
            <primitive object={scene} />
        </mesh>
    )
}

export default Sky