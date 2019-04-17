import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        Hello from Redux-Friend App!
        <Route path='/login' component={LoginPage} />
      </div>
    );
  }
}

export default App;