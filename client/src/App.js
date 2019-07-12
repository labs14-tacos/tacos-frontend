import React from 'react';
import logo from './logo.svg';
import Friends from './components/Friends.js';
import './App.css';

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

export default App;
