import React from 'react'
import { Flex, Typography } from 'antd'
import { useBreakpoints } from '../../utilities/breakpoint'

function VideoTest() {
    const { isMobile, isTablet, isDesktop } = useBreakpoints()
    const getVideoSize = () => {
        if (isMobile) {
            return { width: '100%', height: '100%' }
        }
        if (isTablet) {
            return { width: '80%', height: '80%' }
        }
        return { width: '40%', height: '40%' }
    }
    return (
        <Flex vertical justify="center" align="center" style={{ height: '100vh' }}>
            <Typography.Title level={2}>Video Test</Typography.Title>

            <Flex style={{
                width: getVideoSize().width,
                height: getVideoSize().height,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '10px',
                overflow: 'hidden'
            }}>
                <iframe
                    style={{ width: '100%', height: '100%' }}
                    src="https://www.youtube.com/embed/SivLRE0ez2w" title="CAPTAIsasaN BOY - AI LỚN CŨNG PHẢI | ANIMATION MV" frameborder="0" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>

                </iframe>
            </Flex>
        </Flex>
    )
}

export default VideoTest