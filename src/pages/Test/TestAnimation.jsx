import React from 'react'
import './Test.scss'
import { ButtonCustom } from '../../components'
import { Parallax, ParallaxBanner } from 'react-scroll-parallax'

const TestAnimation = () => {
    return (
        <div className='container'>
            {/* <ButtonCustom /> */}
            <Parallax speed={-10}>
                <div>huhu</div>
            </Parallax>
            <Parallax speed={10}>
                <div>huhu</div>
            </Parallax>
        </div>
    )
}

export default TestAnimation