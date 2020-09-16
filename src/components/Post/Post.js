import React from 'react';
import './Post.css';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';

const Post = (props) => {
    const {title,body} = props.post
    
   
    return (
        <div>
            <h2>Title{title}</h2>
            <p>{body}</p>
             {props.children}
             </div>
    );
};

export default Post;