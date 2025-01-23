import React from 'react'
import { ButtonProps } from './types'

const Button = ({
    variant = 'primary',
    size = 'sm',
    className= '',
    children,
    ...props
}:ButtonProps) => {
    let buttonClass = "px-2 py-1 rounded "
    switch(variant){
        case 'primary':
            buttonClass += "size-12"
            break;
        case 'secondary':
            buttonClass += "size-9"
            break;
    }
    return (
        <button className={buttonClass}{...props}>
            {children}
        </button>
    )
}
export default Button
