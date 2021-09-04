import React, {useState} from 'react';
import styled from 'styled-components';
import Avatar from './Avatar';
import Flexbox from './Flexbox';
import VerifiedIcon from '../icons/verified.svg'

const StyledAuthor = styled.div`
    color: ${props => props.bgColor || props.theme.fontColors.dark};
    margin-left: 0.7rem;
    font-size: 1rem;
    font-weight: 700;
`
const StyledNickname = styled.div`
    margin-left: 0.4rem;
    font-size: 1rem;
    font-weight: 400;
    color: rgb(136, 153, 166);
`

const StyledTime = styled.div`
    margin-left: 0.5rem;
    font-size: 1rem;
    font-weight: 400;
    color: rgb(136, 153, 166);
`

const StyledText = styled.div`
    color: ${props => props.theme.fontColors.dark};
    font-size: 1rem;
    font-weight: 400;
    margin-left: 0.7rem;
    line-height: 1.3rem;
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
    @media (max-width: 400px) {
        width: 250px;
    }
    @media (max-width: 350px) {
        width: 220px;
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

const StyledVerified = styled.div`
    img {
        margin-top: 0.2rem;
        margin-left: 0.25rem;
        width: 1rem;
        height: 1rem;
    }
`

const StyledImg = styled.div`
    width: 97%;
    max-height: 350px;
    padding-left: 0.8rem;
    margin-top: 1rem;
    img {
        border-radius: 1rem;
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: top;
    }
`

const Post = (props) => {

    const [comments, setComments] = useState(Math.floor(Math.random() * 2800 + 200));
    const [retweets, setRetweets] = useState(Math.floor(Math.random() * 19500 + 500));
    const [likes, setLikes] = useState((Math.random() * 200 + 20).toFixed(1));

    function createMarkup() {
        return {__html: props.post.postData};
      }

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

            <Flexbox padding="1rem 1.5rem 1rem 1rem" borderBottom="1px solid #38444d">
                <Avatar url={props.user.avatar}/>
                <Flexbox direction="column">
                    <Flexbox>
                        <StyledAuthor>{props.user.username}</StyledAuthor>
                        <StyledVerified>
                            <img src={VerifiedIcon} alt="verified" />
                        </StyledVerified>
                        <StyledNickname>{props.user.nickname}</StyledNickname>
                        <StyledTime>1h</StyledTime>
                    </Flexbox>
                    <StyledText dangerouslySetInnerHTML={createMarkup()}/>
                    {
                        props.post.image.length ? (
                            <StyledImg>
                                <img src={props.post.image} alt="" />
                            </StyledImg>
                        ) : null
                    }
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