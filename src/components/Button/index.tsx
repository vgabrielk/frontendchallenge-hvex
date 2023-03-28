import React from 'react'
import * as Style from './style'
type ButtonAtributes = {
    title: string,
    responsiveButton?: any,
    fadeUp?: boolean
}

const Button = (props: ButtonAtributes) => {
    return (
        <Style.Button data-aos={props.fadeUp ? 'fade-up' : 'none'} responsive={props.responsiveButton}>
            <p role="main">
                {props.title}
            </p>
        </Style.Button>
    )
}

export default Button