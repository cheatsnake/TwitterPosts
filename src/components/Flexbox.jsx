import React from 'react';
import styled from 'styled-components';

const StyledFlexbox = styled.div`
    display: flex;
    flex-direction: ${props => props.direction || 'row'};
    align-items: ${props => props.align || 'stretch'};
    justify-content: ${props => props.justify || 'stretch'};
    margin: ${props => props.margin || 0};
    padding: ${props => props.padding || 0};
    border-bottom: ${props => props.borderBottom || 0};
`

const Flexbox = (props) => {
    return <StyledFlexbox {...props}/>
};

export default Flexbox;