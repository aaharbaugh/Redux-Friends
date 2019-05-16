import React from 'react';

import './App.css';
import LoginForm from './components/LoginForm';
import FriendsList from './components/FriendsList';

import PrivateRoute from './PrivateRoute.js';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/login">Login</Link>
        <Link to="/protected">Protected Page</Link>
        <Route path="/login" component={LoginForm} />
        <PrivateRoute exact path="/protected" component={FriendsList} />
      </div>
      
    </Router>
  );
}

export default App;
