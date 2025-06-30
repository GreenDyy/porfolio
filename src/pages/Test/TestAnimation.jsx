import React, { useState, useRef } from 'react'
import './Test.scss'
import { ButtonCustom } from '../../components'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { Flex } from 'antd'
import text_greend from '../../assets/images/parallax/text_greend.png'
import ParallaxFireWatch from './Parallax/ParallaxFireWatch'
import ParallaxGreenD from './Parallax/ParallaxGreenD'

// factor={1} // nó sẽ chiếm 100vh
const TestAnimation = () => {
    const refTest = useRef(null)

    return (
        <div className='test-container'>
            {/* <ButtonCustom /> */}
            {/* <ParallaxFireWatch /> */}
            <ParallaxGreenD />
        </div>
    )
}

export default TestAnimation