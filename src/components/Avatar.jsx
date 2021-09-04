import React from 'react';
import styled from 'styled-components';

const StyledAvatar = styled.img`
    display: block;
    width: 53px;
    height: 53px;
    border-radius: 50%;
`

const Avatar = ({url}) => {
    return <StyledAvatar src={url}/>
};

export default Avatar;