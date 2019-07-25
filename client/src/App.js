import React from 'react';
import Friends from './components/Friends.js';
import Login from './components/loginComponents/Login';
import './App.css';

function App() {
  return (
    <div className="App">
        <p>
          Welcome to the <span>Let's Get Tacos!</span> React App! 
        </p>
      <Login />
      <Friends />
    </div>
  );
}

export default App;