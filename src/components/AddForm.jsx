import React from 'react';
import { useState } from 'react/cjs/react.development';
import styled from 'styled-components';
import Button from './Button';

const StyledAddImg = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: #00000080;
    z-index: 10;
    form {
        width: 100%;
        max-width: 500px;
        display: flex;
        flex-direction: column;
        padding: 1rem;
        background-color: ${props => props.theme.colors.darkBg};
        label {
            
        }
        input {
            padding: 0.2rem 0.5rem;
            color: ${props => props.theme.fontColors.dark};
            margin-top: 1rem;
            font-size: 1.2rem;
            width: 100%;
            border: none;
            border-bottom: 1px solid grey;
            background-color: ${props => props.theme.colors.darkBg};
            &:focus {
                outline: none;
            }
        }
        
    }
`

const AddForm = ({onAddImg, setPostImg}) => {

    const [url, setUrl] = useState('');

    function onAdd(e) {
        e.preventDefault();
        setPostImg(url);
        onAddImg();
    }

    return (
        <StyledAddImg>
            <form action="/" onSubmit={(e) => onAdd(e)}>
                <label htmlFor="url">Add Image URL</label>
                <input 
                    onChange={(e) => setUrl(e.target.value)} 
                    type="text" 
                    name="url" 
                    placeholder="Paste URL here"/>
                <Button marginTop="1.5rem">Submit</Button>
            </form>
        </StyledAddImg>
    )
};

export default AddForm;