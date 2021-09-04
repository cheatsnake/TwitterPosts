import React, { createRef, useEffect, useState } from 'react';
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
    font-size: 1.2rem;
    resize: none;
    &:focus {
        outline: none;
    }
`
const StyledAdd = styled.div`
    margin-top: 0.5rem;
    cursor: pointer;
    color: ${props => props.color || props.theme.colors.accent};
    font-weight: 700;
    transition: 0.3s all;
    margin-left: 4.6rem;
    &:hover {
        opacity: 0.7;
    }
`

const PostForm = ({tweet, onAddImg, avatar}) => {

    const [text, setText] = useState('');
    const [rows, setRows] = useState(1);
    const ref = createRef();

    function onTweet(msg) {
        tweet(msg.split('\n').join('<br>'));
        setText('');
    }

    useEffect(() => {
        if (ref.current.scrollHeight > ref.current.clientHeight && rows < 10) {
            setRows(rows + 1);
        }
        if (ref.current.innerHTML.length < 1) {
            setRows(1);
        }
      }, [ref, rows]);

    return (
        <Flexbox direction="column" padding="1rem" borderBottom="1px solid #38444d">
            <Flexbox align="flex-start">
                <Avatar url={avatar}/>
                <StyledInput 
                    ref={ref} 
                    onInput={(e) => setText(e.target.value)} 
                    value={text} 
                    rows={rows}
                    placeholder="What happen?"/>
            </Flexbox>
            <Flexbox direction="row" justify="space-between" align="flex-start">
                <StyledAdd onClick={onAddImg}>Add image</StyledAdd>
                <Button onClick={() => onTweet(text)}>Tweet</Button>
            </Flexbox>
        </Flexbox>
    );
};

export default PostForm;