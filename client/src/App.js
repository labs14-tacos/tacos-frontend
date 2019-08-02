import React, { Component } from 'react';
import Login from './components/loginComponents/Login';
import './App.css';
import { Route } from 'react-router-dom';
import './App.css';

class App extends Component {
 
  render() {

    return (
      <div className="App">
        <p>
          Welcome to the <span>Let's Get Tacos!</span> React App!
        </p>
        <Login />
      </div>
    );
  }
}

export default App;