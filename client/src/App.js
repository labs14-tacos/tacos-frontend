import React from 'react';
import Friends from './components/Friends.js';
import Authentication from './components/loginComponents/Authentication';
import Login from './components/loginComponents/Login';
import './App.css';

const App = Authentication (
  function App() {
    return (
      <div className="App">
          <p>
            Welcome to the <span>Let's Get Tacos!</span> React App! 
          </p>
        <Friends />
      </div>
    );
  }
)


export default Authentication(App);
