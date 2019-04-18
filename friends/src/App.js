import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import FriendsList from './components/FriendsList';
import HomePage from './components/HomePage';
import PrivateRoute from './components/PrivateRoute';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/login'>Log in</Link>
          <Link to='/friends-list'>Frieds List</Link>
        </nav>
        <Route exact path='/' component={HomePage} />
        <Route path='/login' component={LoginPage} />
        <PrivateRoute path='/friends-list' component={FriendsList} />
      </div>
    );
  }
}

export default App;