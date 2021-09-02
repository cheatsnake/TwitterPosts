import React, {useState} from 'react';
import styled from 'styled-components';
import Avatar from './Avatar';
import Flexbox from './Flexbox';

const StyledAuthor = styled.div`
    color: ${props => props.bgColor || props.theme.fontColors.dark};
    margin-left: 0.7rem;
    font-size: 1rem;
    font-weight: 700;
`
const StyledNickname = styled.div`
    margin-left: 0.5rem;
    font-size: 1rem;
    font-weight: 400;
    color: rgb(136, 153, 166);
`

const StyledText = styled.div`
    margin-top: 0.15rem;
    color: ${props => props.bgColor || props.theme.fontColors.dark};
    font-size: 1rem;
    font-weight: 400;
    margin-left: 0.7rem;
`

const StyledPostButtons = styled(Flexbox)`
    line-height: 1.2rem;
    color: rgb(136, 153, 166);
    width: 300px;
    font-size: 0.9rem;
    user-select: none;
    i {
        font-size: 1.1rem;
        margin-right: 0.7rem;
    }
`

const StyledComment = styled.div`
    cursor: pointer;
    display: flex;
    justify-content: space-around;
    transition: 0.5s all;
    &:hover {
        color: ${props => props.theme.colors.accent};
    }
`
const StyledRetweet = styled.div`
    cursor: pointer;
    display: flex;
    justify-content: space-around;
    transition: 0.5s all;
    &:hover {
        color: #18e47e;
    }
`
const StyledLike = styled.div`
    cursor: pointer;
    display: flex;
    justify-content: space-around;
    transition: 0.5s all;
    &:hover {
        color: #d1255e;
    }
`

const Post = (props) => {

    const [comments, setComments] = useState(Math.floor(Math.random() * 2800 + 200));
    const [retweets, setRetweets] = useState(Math.floor(Math.random() * 19500 + 500));
    const [likes, setLikes] = useState((Math.random() * 200 + 20).toFixed(1));

    function onCounter(elem) {
        if (elem === 'comments') {
            setComments(Math.floor(Math.random() * 2800 + 200));
        } else if (elem === 'retweets') {
            setRetweets(Math.floor(Math.random() * 19500 + 500));
        } else {
            setLikes((Math.random() * 200 + 20).toFixed(1));
        }
    }


    return (

            <Flexbox padding="1rem" borderBottom="1px solid gray">
                <Avatar/>
                <Flexbox direction="column">
                    <Flexbox>
                        <StyledAuthor>Elon Musk</StyledAuthor>
                        <StyledNickname>@elonmusk</StyledNickname>
                    </Flexbox>
                    <StyledText>
                        {props.text}
                    </StyledText>
                    <StyledPostButtons justify="space-between" margin="1rem 0 0 0.7rem">
                        <StyledComment onClick = {() => onCounter('comments')}>
                            <i className="far fa-comment"></i>
                            {comments > 999 ? (comments / 1000).toFixed(1) + 'K' : comments}
                        </StyledComment>
                        <StyledRetweet onClick = {() => onCounter('retweets')}>
                            <i className="fas fa-retweet"></i>
                            {retweets > 999 ? (retweets / 1000).toFixed(1) + 'K' : retweets}
                        </StyledRetweet>
                        <StyledLike onClick = {() => onCounter('likes')}>
                            <i className="far fa-heart"></i>
                            {likes + 'K'}
                        </StyledLike>
                    </StyledPostButtons>
                </Flexbox>
            </Flexbox>

    )
};

export default Post;