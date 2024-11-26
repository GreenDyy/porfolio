import React from 'react'

interface Props {
    height?: number
    width?: number
}

function SpaceComponent(props: Props) {

    const { height, width } = props

    return (
        <div style={{
            height: height,
            width: width,

        }} />
    )
}

export default SpaceComponent