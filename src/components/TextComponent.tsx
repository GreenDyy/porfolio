import React from 'react'
interface Props {
    text: string
    color?: string
    fontSize?: number
}

const TextComponent = (props: Props) => {
    const { text, color, fontSize } = props
    return (
        <p style={{
            color: color ?? 'white',
            fontSize: fontSize ?? 16,
        }}
        >
            {text}
        </p>
    )
}

export default TextComponent