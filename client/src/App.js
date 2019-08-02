
import React, { Component } from 'react';

// import Login from './components/loginComponents/Login';

import './App.css';
// import { Route } from 'react-router-dom';
// import axios from 'axios';
import DatePicker from './components/TacoLog/DatePicker'



const style = {
  position: "relative",
  margin: "50px auto"
}

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
}

export default App;