import React from 'react';
import Button from '@material-ui/core/Button';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NoMatch from './components/NoMatch/NoMatch';
import Home from './components/Home/Home';
import PostDetails from './components/PostDetails/PostDetails';
import Comments from './components/Comments/Comments';
import NavBar from './components/NavBar /NavBar';

function App() {
  return (
    <div>
      
    <Router>
      <NavBar></NavBar>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path = '/post/:postId'>
          <PostDetails/>
        </Route>
        <Route path = '/comments'>
            <Comments/>
        </Route>
        <Route path='*'> 
          <NoMatch/>
        </Route>
      </Switch>
    </Router>
    </div>

  );
}

export default App;
