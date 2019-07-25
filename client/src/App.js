import React from 'react';
import Login from './components/loginComponents/Login';
import './App.css';

function App() {
  return (
    <div className="App">
        <p>
          Welcome to the <span>Let's Get Tacos!</span> React App! 
        </p>
      <Login />
    </div>
  );
}

export default App;