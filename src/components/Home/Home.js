import React, { useEffect, useState } from 'react';
import './Home.css'
import Post from '../Post/Post';
import { useHistory } from 'react-router-dom';

import Button from '@material-ui/core/Button';

const Home = () => {
    const [postes,setPost] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPost(data))
    },[])

   
    const history =  useHistory();
    const handlePostDetails = (id)=>{
      history.push(`/friend/${id}`)
    }
    return (
        <div>
            {
                postes.map(pt=> <Post
                key = {pt.id}   
                post= {pt}
                handlePostDetails = {handlePostDetails}
                >
                     <Button onClick= {()=>handlePostDetails(pt.id)} variant='contained' color='primary'>See More</Button>  
       
                </Post>)
            }
        </div>
    );
};

export default Home;