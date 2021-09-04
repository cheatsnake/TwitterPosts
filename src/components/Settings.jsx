import React from 'react';
import { useState } from 'react/cjs/react.development';
import styled from 'styled-components';
import Button from './Button';

const StyledSettings = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: #00000070;
    z-index: 10;
`
const StyledWindow = styled.div`
    position: relative;
    background-color: ${props => props.theme.colors.darkBg};
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
    padding: 1rem 1.5rem 2rem 1.5rem;
`

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    label {
        padding-top: 2rem;
    }
    input {
        width: 100%;
        font-size: 1.2rem;
        padding: 0.5rem;
        color: ${props => props.theme.fontColors.dark};
        border: none;
        background-color: ${props => props.theme.colors.darkBg};
        border-bottom: 1px solid gray;
        &:focus {
            outline: none;
        }
    }
`

const Settings = ({onSettings, user, setUser}) => {

    const [newUser, setNewUser] = useState([
        {
            username: user.username,
            nickname: user.nickname,
            avatar: user.avatar
        }
    ]);

    function onClose(e) {
        if (e.target.id === 'overlay') {
            onSettings();
        }
    }

    function onSetUser(e) {
        e.preventDefault();
        setUser(newUser);
        onSettings();
    }
    
    return (
        <StyledSettings id="overlay" onClick={(e) => onClose(e)}>
            <StyledWindow id="settings">
                <h2>Settings</h2>
                <StyledForm action="/" onSubmit={(e) => onSetUser(e)}>
                    <label htmlFor="Username">Username</label>
                    <input 
                        onChange={(e) => setNewUser([{
                            username: e.target.value,
                            nickname: newUser[0].nickname,
                            avatar: newUser[0].avatar
                        }])} 
                        type="text" 
                        placeholder="Elon Musk" 
                        name="Username"
                        value={newUser[0].username}
                        minLength="3"
                        maxLength="20" />
                    <label htmlFor="Nickname">Nickname</label>
                    <input 
                        onChange={(e) => setNewUser([{
                            username: newUser[0].username,
                            nickname: e.target.value,
                            avatar: newUser[0].avatar
                        }])} 
                        type="text" 
                        placeholder="@elonmusk" 
                        name="Nickname"
                        value={newUser[0].nickname}
                        minLength="3"
                        maxLength="20" />
                    <label htmlFor="Image">Image URL</label>
                    <input 
                        onChange={(e) => setNewUser([{
                            username: newUser[0].username,
                            nickname: newUser[0].nickname,
                            avatar: e.target.value
                        }])} 
                        type="text"
                        value={newUser[0].avatar} 
                        placeholder="https://.../img.jpg" 
                        name="Image" />
                    <Button marginTop="1.5rem">Submit</Button>
                </StyledForm>
            </StyledWindow>
        </StyledSettings>
    )
};

export default Settings;