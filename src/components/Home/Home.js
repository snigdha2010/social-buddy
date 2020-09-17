import React, { useEffect, useState } from 'react';
import './Home.css'
import Post from '../Post/Post';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const Home = () => {

    const [postes,setPost] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPost(data))
    },[])
   
    const history =  useHistory();
    const handlePostDetails = (id)=>{
      history.push(`/post/${id}`)
    }
    return (
        <div>
            <Grid container style={{padding: 24,margin:70}}>
            {
                postes.map(pt=><Grid item  xs={12} sm={6} lg={4} xl={3}> <Post
                key = {pt.id}   
                post= {pt}
                >
                     <Button onClick= {()=>handlePostDetails(pt.id)} variant='contained' color='primary'>See More</Button>  
       
                </Post> </Grid>)
            } </Grid>
        </div>
    );
};

export default Home;