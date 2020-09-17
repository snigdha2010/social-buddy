import React from 'react';
import './Comments.css';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import { styled } from '@material-ui/core/styles';
import { compose, spacing, palette } from '@material-ui/system';

const Box = styled('div')(compose(spacing, palette));
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(3),
      },
    },
  }));

const Comments = (props) => { 
  const {name,body,email} = props.comment
  const {flag} = props.post
  const classes = useStyles();

    return (
    <>
    <Box color="white" bgcolor="palevioletred" p={1}>
        <h1>Comments:</h1>
        <div className={classes.root}> 
            <Avatar alt="picture" src={flag}  />
            <div>  
                <h2>{name}</h2>
                <h4>{body}</h4>
                <h4>Email:{email}</h4>
            </div> 
        </div>
    </Box>
    </>
        
    );
};

export default Comments;


