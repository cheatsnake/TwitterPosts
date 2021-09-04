import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    cursor: pointer;
    margin-top: ${props => props.marginTop || '0.7rem'};
    background-color: ${props => props.theme.colors.accent};
    padding: 0.3rem 1.5rem 0.5rem 1.5rem;
    border: none;
    border-radius: 1.5rem;
    color: #fff;
    font-weight: 600;
    font-size: 1.2rem;
    transition: .3s all;
    &:hover {
        background-color: #1677b9;
    }
`

const Button = (props) => {
    return <StyledButton {...props}/>
};

export default Button;