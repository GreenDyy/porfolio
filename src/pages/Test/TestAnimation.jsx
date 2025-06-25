import React from 'react'
import './Test.scss'
import { ButtonCustom } from '../../components'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

const TestAnimation = () => {
    return (
        <div className='test-container'>
            {/* <ButtonCustom /> */}
            <Parallax pages={2}>
                <ParallaxLayer speed={0.01}>
                    <div style={{ width: '100%', height: '100%' }}>
                        <img src="https://i.pinimg.com/736x/28/dc/36/28dc36d443030e5222e4b39118f18d4e.jpg" alt="" />
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={1} speed={1}>
                    <div style={{ width: '100%', height: '100%' }}>
                        <img src="https://i.pinimg.com/736x/8e/0c/28/8e0c28b320929ff9c23723e70785ec97.jpg" alt="" />
                    </div>
                </ParallaxLayer>
                <ParallaxLayer
                    sticky={{ start: 0.2, end: 1.2 }}
                    speed={0.5}
                >
                    <img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2ljazJ3Zm5ibGo5ZzJiNmE1a3RzeThibjVoNTR5cDJzNmwxbXozeiZlcD12MV9naWZzX3RyZW5kaW5nJmN0PWc/sWJRqC2Wzn9mQyi0za/200.webp" alt="" />
                </ParallaxLayer>
            </Parallax>
        </div>
    )
}

export default TestAnimation