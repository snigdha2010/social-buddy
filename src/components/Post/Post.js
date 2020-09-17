import React from 'react';
import './Post.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
   
const Post = (props) => {
    const {title,body} = props.post

    const useStyles = makeStyles({
        root: {
          maxWidth: 345,
          margin: 10
        }
      });
      const classes = useStyles();
   
    return (
       
   <div className = 'col-md-3'>    
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {body}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
        {props.children}
        </Button>
      </CardActions>
    </Card>
    </div> 
           
    );
};

export default Post;