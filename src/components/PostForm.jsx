import React, { useState } from 'react';
import styled from 'styled-components';
import Avatar from './Avatar';
import Button from './Button';
import Flexbox from './Flexbox';

const StyledInput = styled.textarea`
    margin-top: 1rem;
    width: 100%;
    border: none;
    background-color: ${props => props.bgColor || props.theme.colors.darkBg};
    color: ${props => props.color || props.theme.fontColors.dark};
    padding: 0 1rem;
    font-size: 1.5rem;
    resize: none;
    &:focus {
        outline: none;
    }
`
const StyledAddImage = styled.div`
    cursor: pointer;
    color: ${props => props.color || props.theme.colors.accent};
    font-weight: 700;
    transition: 0.3s all;
    margin-left: 4.6rem;
    &:hover {
        opacity: 0.7;
    }
`

const PostForm = ({tweet}) => {

    const [text, setText] = useState('');

    function onTweet(msg, img = '') {
        tweet(msg)
        setText('');
    }

    // console.log(StyledInput.clientHeight);
    return (
        <Flexbox direction="column" padding="1rem" borderBottom="1px solid gray">
            <Flexbox align="flex-start">
                <Avatar/>
                <StyledInput onInput={(e) => setText(e.target.value)} value={text} rows="2" placeholder="What happen?"/>
            </Flexbox>
            <Flexbox direction="row" justify="space-between" align="flex-start">
                <StyledAddImage>Add image</StyledAddImage>
                <Button onClick={() => onTweet(text)}>Tweet</Button>
            </Flexbox>
        </Flexbox>
    );
};

export default PostForm;