import React from 'react'
import './Test.scss'
import { ButtonCustom } from '../../components'
import { Parallax, ParallaxBanner } from 'react-scroll-parallax'

const TestAnimation = () => {
    return (
        <div className='test-container'>
            {/* <ButtonCustom /> */}
            <Parallax speed={-10}>
                <div>huhsu</div>
            </Parallax>
            <Parallax speed={10}>
                <div>Tao nè</div>
            </Parallax>
            <p>as</p>
        </div>
    )
}

export default TestAnimation