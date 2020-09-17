import React from 'react';
import './NavBar.css';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography';

const NavBar = () => {
    return (
        <div>
        <AppBar position="fixed">
            <Toolbar>
               <Typography>
                    <a className='nav-bar' href="/">Social Buddy!</a>    
                </Typography>
            </Toolbar>
        </AppBar>
        </div>
    );
};

export default NavBar;


