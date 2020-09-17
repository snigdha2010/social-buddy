import React, { useEffect, useState } from 'react';
import './Home.css'
import Post from '../Post/Post';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const Home = () => {
    const [postes,setPost] = useState([])
    const [country,setCountry] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPost(data))
    },[])

    useEffect(()=>{
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res =>res.json())
        .then(data=> {
           const newData = data.slice(0,100)
            setCountry(newData)
        }
            )
    })
    // const flag = country.map(ct => {
    //   const newPost = postes.map(pt=>{
    //         pt.flag = ct.flag
    //     })
    //     return newPost;
    // })
    
//    const flag = country.map(ct => ct.flag)
//    console.log(flag)
 //   const con = flag.forEach((item)=>{
        //    // console.log(item)
        // })
    // postes.forEach((item)=>{
    //  item.flags = "https://restcountries.eu/data/cog.svg"
    // })
    
   // console.log(postes)
   
    const history =  useHistory();
    const handlePostDetails = (id)=>{
      history.push(`/post/${id}`)
    }
    return (
        <div>
            {
                postes.map(pt=> <Post
                key = {pt.id}   
                post= {pt}
                >
                     <Button onClick= {()=>handlePostDetails(pt.id)} variant='contained' color='primary'>See More</Button>  
       
                </Post>)
            }
        </div>
    );
};

export default Home;