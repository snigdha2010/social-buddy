import React from 'react';
import './Comments.css'


const Comments = (props) => { 
  const {name,body,email} = props.comment
  const {flag} = props.post
  //console.log(props.post)
    return (
        <div>
            <h1>Comments:</h1>
            <h2>{name}</h2>
            <p>{body}</p>
            <p>Email:{email}</p>
            <img src={flag}alt=""/>
         
        </div>
    );
};

export default Comments;