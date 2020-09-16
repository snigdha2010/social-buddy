import React, { useEffect, useState } from 'react';
import './PostDetails.css'
import { useParams } from 'react-router-dom';
import Post from '../Post/Post';

const PostDetails = () => {
    const {friendId} = useParams();
    const [posts,setPost] = useState([])
    
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPost(data))
    },[])

    const post = posts.find(pt=>pt.id === parseInt(friendId))
    console.log(post)
    
    return (
        <div>
            Details
            {/* {
                post.map(pt=><Post post ={pt}></Post>)
            } */}


        </div>
    );
};

export default PostDetails;