import React, { useState } from 'react';
import styled from 'styled-components';
import Post from './components/Post';
import PostForm from './components/PostForm';

const StyledApp = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${props => props.bgColor || props.theme.colors.darkBg};
  color: ${props => props.bgColor || props.theme.fontColors.dark};
`
const StyledContainer = styled.div`
  max-width: 700px;
  min-height: 100vh;
  margin: 0 auto;
  border-left: 1px solid grey;
  border-right: 1px solid gray;
  border-bottom: 1px solid gray;
`
const StyledHeader = styled.div`
  width: 100%;
  padding: 1rem;
  font-size: 1.5rem;
  font-weight: 600;
  background-color: ${props => props.bgColor || props.theme.colors.darkBg};
  color: ${props => props.bgColor || props.theme.fontColors.dark};
  border-bottom: 1px solid grey;
`

function App() {
  const [index, setIndex] = useState(0);
  const [posts, setPosts] = useState([]);

  function tweet(msg, img = '') {
    const newPost = [{postId: index, postData: msg, image: img}];
    setIndex(index + 1);
    setPosts([...newPost, ...posts]);
  }

  return (
    <StyledApp>
      <StyledContainer>
        <StyledHeader>Twitter Posts</StyledHeader>
        <PostForm tweet={tweet}/>
        {
          posts ? (
            posts.map(post => {
              return <Post key={post.postId} text={post.postData}/>
            })
          ) : 'Nothing there'
        }
      </StyledContainer>
    </StyledApp>
  );
}

export default App;
