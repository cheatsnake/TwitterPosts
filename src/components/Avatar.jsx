import React from 'react';
import styled from 'styled-components';

const StyledAvatar = styled.img`
    display: block;
    width: 55px;
    height: 55px;
    border-radius: 50%;
`

const Avatar = () => {
    return <StyledAvatar src={"https://pbs.twimg.com/profile_images/1423663740344406029/l_-QOIHY_400x400.jpg"}/>
};

export default Avatar;