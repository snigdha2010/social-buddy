import React from 'react';
import './Post.css';

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