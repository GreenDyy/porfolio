import React, { useState, useRef } from 'react'
import './Test.scss'
import { ButtonCustom } from '../../components'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

const TestAnimation = () => {
    const refTest = useRef(null)

    return (
        <div className='test-container'>
            {/* <ButtonCustom /> */}
            <Parallax pages={4} ref={refTest}>
                {/* <ParallaxLayer speed={3} style={{ backgroundColor: 'red' }}>
                    <div style={{ width: '100%', height: '100%' }}>
                        <img src="https://i.pinimg.com/736x/28/dc/36/28dc36d443030e5222e4b39118f18d4e.jpg" alt="" />
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={1.0} style={{ backgroundColor: 'blue' }} speed={3}>
                    <div style={{ width: '100%', height: '100%' }}>
                        <img src="https://i.pinimg.com/736x/8e/0c/28/8e0c28b320929ff9c23723e70785ec97.jpg" alt="" />
                    </div>
                </ParallaxLayer> */}

                <ParallaxLayer
                    speed={2} //càng lớn sẽ delay càng nhiều
                    factor={1} // nó sẽ chiếm 100vh
                    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                    onClick={() => {
                        refTest.current.scrollTo(1)
                    }}
                >
                    <h1 style={{ fontFamily: 'sans-serif', fontSize: '100px' }}>My name is GreenD</h1>
                </ParallaxLayer>

                <ParallaxLayer speed={2} offset={1} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue' }}>
                    <h1>I'm very happy</h1>
                </ParallaxLayer>
                <ParallaxLayer
                    sticky={{ start: 0.11, end: 0.2 }}
                    offset={0} speed={12}
                >
                    <img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2ljazJ3Zm5ibGo5ZzJiNmE1a3RzeThibjVoNTR5cDJzNmwxbXozeiZlcD12MV9naWZzX3RyZW5kaW5nJmN0PWc/sWJRqC2Wzn9mQyi0za/200.webp" alt="" />
                </ParallaxLayer>
            </Parallax>
        </div>
    )
}

export default TestAnimation