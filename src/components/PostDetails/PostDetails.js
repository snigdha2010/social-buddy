import React, { useEffect, useState } from 'react';
import './PostDetails.css'
import { useParams} from 'react-router-dom';
import Post from '../Post/Post';
import Comments from '../Comments/Comments';

const PostDetails = () => {
    const {friendId} = useParams();
    const [posts,setPost] = useState([])
    const [comment, setComment] = useState([])
    
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPost(data))   
    },[])

    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/comments/${friendId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setComment(data))     
    },[])

  const post = posts.find(pt=>pt.id === parseInt(friendId))
    return (
        <div>
            Details
            {
               post && (<Post post={post}></Post>) 
            } 
            <Comments comment={comment} ></Comments>
        </div>
    );
};

export default PostDetails;