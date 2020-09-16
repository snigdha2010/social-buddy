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

function App() {
  return (
    // <div className="App">
    //   <Button variant='contained' color='primary'>Buddy</Button>
    // </div>
    //mui, 
    //show posts, see more btn > detail post using route ,
    //post + show comment >component > dynamic 
    // pic with comment
    <div>
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path = '/friend/:friendId'>
          <PostDetails/>
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
