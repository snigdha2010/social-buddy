import React, { useEffect, useState } from 'react';
import './PostDetails.css'
import { useParams, Link, useHistory } from 'react-router-dom';
import Post from '../Post/Post';
import Button from '@material-ui/core/Button';
import Comments from '../Comments/Comments';

const PostDetails = () => {
    const {friendId} = useParams();
    const [posts,setPost] = useState([])
    //const [comment, setComment] = useState([])
    const [showComment, setShowComment] = useState(false)
    
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPost(data))   
    },[])

    // useEffect(()=>{
    //     const url = `https://jsonplaceholder.typicode.com/comments/${friendId}`
    //     fetch(url)
    //     .then(res => res.json())
    //     .then(data => setComment(data))     
    // },[])

    // const history = useHistory();
    // const handleComments = ()=>{
    //     history.push('/comments')
    //     setShowComment(true);
    // }
    
  //  console.log(comment)
    
    
   
  const post = posts.find(pt=>pt.id === parseInt(friendId))
  
 
    
    return (
        <div>
            Details
            {
               post && (<Post post={post}>
                        <Button  variant='contained' color='primary'> Comments</Button>  
               </Post>) 
            } 


        </div>
    );
};

export default PostDetails;