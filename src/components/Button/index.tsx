import React from 'react'
import * as Style from './style'
type ButtonAtributes = {
    title: string,
    responsiveButton?: any
}

const Button = (props: ButtonAtributes) => {
    return (
        <Style.Button responsive={props.responsiveButton}>
            <span role="main">
                {props.title}
            </span>
        </Style.Button>
    )
}

export default Button