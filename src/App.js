import React, { useState } from 'react';
import styled from 'styled-components';
import AddForm from './components/AddForm';
import Flexbox from './components/Flexbox';
import Post from './components/Post';
import PostForm from './components/PostForm';
import Settings from './components/Settings';

const StyledApp = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${props => props.bgColor || props.theme.colors.darkBg};
  color: ${props => props.bgColor || props.theme.fontColors.dark};
`
const StyledContainer = styled.div`
  max-width: 666px;
  min-height: 100vh;
  margin: 0 auto;
  border-left: 1px solid #38444d;
  border-right: 1px solid #38444d;
  border-bottom: 1px solid #38444d;
`
const StyledHeader = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  background-color: ${props => props.bgColor || props.theme.colors.darkBg};
  color: ${props => props.bgColor || props.theme.fontColors.dark};
`
const StyledSettings = styled.div`
  cursor: pointer;
  padding: 0.5rem;
  font-size: 1.2rem;
  transition: 0.3s all;
  &:hover {
    color: ${props => props.theme.colors.accent};
    background-color: #1357af24;
    border-radius: 50%;
  }
`
const StyledEmpty = styled.div`
  width: 100%;
  height: 50vh;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font-weight: 400;
    font-size: 1.5rem;
    opacity: 0.5;
  }
`

function App() {
  const [settings, setSettings] = useState(false);
  const [addImg, setAddImg] = useState(false);
  const [index, setIndex] = useState(0);
  const [posts, setPosts] = useState([]);
  const [postImg, setPostImg] = useState('');
  const [user, setUser] = useState([
  {
    username: 'Elon Musk',
    nickname: '@elonmusk',
    avatar: 'https://www.cnet.com/a/img/998x9FWwx5x5urvdn6ErMiodrA8=/940x0/2021/07/20/c8ab2a17-7f31-4b31-9c9f-9d665efb4787/superheavy.jpg'
  }]);

  function tweet(msg) {
    const newPost = [{postId: index, postData: msg, image: postImg}];
    setIndex(index + 1);
    setPosts([...newPost, ...posts]);
    setPostImg('');
  }

  return (
    <StyledApp>
      {settings ? (<Settings user={user[0]} setUser={(data) => setUser(data)} onSettings={() => setSettings(false)}/>) : null}
      {addImg ? (<AddForm onAddImg={() => setAddImg(false)} setPostImg={(url) => setPostImg(url)}/>) : null}
      <StyledContainer>
        <Flexbox justify="space-between" align="center" padding="1rem" borderBottom="1px solid #38444d">
          <StyledHeader>Twitter Posts</StyledHeader>
          <StyledSettings onClick={() => setSettings(!settings)}><i className="fas fa-cog"></i></StyledSettings>
        </Flexbox>
        <PostForm tweet={tweet} onAddImg={() => setAddImg(true)} avatar={user[0].avatar}/>
        {
          posts.length ? (
            posts.map(post => {
              return <Post key={post.postId} post={post} user={user[0]} />
            })
          ) : <StyledEmpty><p>It's empty here</p></StyledEmpty>
        }
      </StyledContainer>
    </StyledApp>
  );
}

export default App;
