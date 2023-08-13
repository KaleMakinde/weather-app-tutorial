import React from 'react'
import { StyledButton } from './button.styled'

const Button = ({ children, color, width }) => {
    return (
        <StyledButton color={color} width={width}>{children}</StyledButton>
    );
}

export default Button;


 
