import React, { useEffect, useState } from 'react';
import './Comments.css'


const Comments = () => {
    const [comment, setComment] = useState([])
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/comments/${friendId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setComment(data))     
    },[])

    return (
        <div>
            <h2>kk</h2>
            <p></p>
            <p></p>
        </div>
    );
};

export default Comments;