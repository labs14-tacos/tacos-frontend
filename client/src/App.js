<<<<<<< HEAD
import React from 'react';
import Login from './components/loginComponents/Login';
=======

import React, { Component } from 'react';

// import Login from './components/loginComponents/Login';

>>>>>>> 3c0c2fdc0f8a41b682ee74dc631731c054cc88ce
import './App.css';
// import { Route } from 'react-router-dom';
// import axios from 'axios';
import DatePicker from './components/TacoLog/DatePicker'



const style = {
  position: "relative",
  margin: "50px auto"
}

<<<<<<< HEAD
function App() {
  return (
    <div className="App">
        <p>
          Welcome to the <span>Let's Get Tacos!</span> React App! 
        </p>
      <Login />
    </div>
  );
=======
class App extends Component {
  onDayClick = (e, day) => {
    alert(day);
  }
  
  render() {
    return (
      <div className="App">
        <DatePicker style={style} width="302px" 
          onDayClick={(e, day)=> this.onDayClick(e, day)}/>     
      </div>
    );
  }
>>>>>>> 3c0c2fdc0f8a41b682ee74dc631731c054cc88ce
}

export default App;