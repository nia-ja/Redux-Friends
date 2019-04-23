import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import FriendsList from './components/FriendsList';
import HomePage from './components/HomePage';
import PrivateRoute from './components/PrivateRoute';
import { connect } from "react-redux";
import userIcon from './img/icon-user.png';

class App extends Component {

  logOut = e => {
    e.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    window.location.reload();
  }
  render() {
    return (
      <div className="App">
        <header>
          <h1><Link to='/'>Friends List</Link></h1>
          <nav>
            <div className='user-greeting'>
              <img className='user-icon' src={userIcon} />
              {this.props.username ? (<p onClick={this.logOut}>{this.props.username}</p>) : (<Link to='/login'>Log in</Link>)}
            </div>
            <Link to='/friends-list'>Friends List</Link>
          </nav>
        </header>

        <Route exact path='/' component={HomePage} />
        <Route path='/login' component={LoginPage} />
        <PrivateRoute path='/friends-list' component={FriendsList} />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    username: state.credentials.username
  };
};

export default connect(mapStateToProps, {})(App);