import React, { useEffect, useState } from 'react';
import './PostDetails.css'
import { useParams} from 'react-router-dom';
import Post from '../Post/Post';
import Comments from '../Comments/Comments';

const PostDetails = () => {
    const {postId} = useParams();
    const [posts,setPost] = useState([])
    const [comment, setComment] = useState([])
   // const [country,setCountry] = useState([])
    
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPost(data))   
    },[])

    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/comments/${postId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setComment(data))     
    },[])

    // useEffect(()=>{
    //     fetch('https://restcountries.eu/rest/v2/all')
    //     .then(res =>res.json())
    //     .then(data=> {
    //        const newData = data.slice(0,100)
    //         setCountry(newData)
    //     }
    //         )
    // })
    posts.forEach((item)=>{
        item.flag = "https://restcountries.eu/data/cog.svg"
       })
  const post = posts.find(pt=>pt.id === parseInt(postId))
  


    return (
        <div style={{padding: 24,margin:40}}>
           <h2 style={{textAlign:"center",marginBottom:60}}>Friends Details</h2>
            <div style={{marginLeft:70,marginBottom:60}} >
            {
               post && (<Post 
                key ={post.id}
                post={post}></Post>) 
            }
            </div>
           
            {
           post &&(<Comments 
            key = {post.id}
            post = {post} 
            comment={comment} ></Comments>)
            }
        </div>
    );
};

export default PostDetails;