
import React from 'react';
import Friends from './Friends.js';
import React, { Component } from 'react';
import Friends from './Friends.js';
import DatePicker from './TacoLog/DatePicker'
import TacoView from './TacoLog/TacoView';

// The new App.js! 


const style = {
  position: "relative",
  margin: "50px auto"
}

class LoggedInApp extends React.Component {

 onDayClick = (e, day) => {
    alert(day);
  }

  render() {
  return (
    <div className="App">
        <p>
          Let's Get Tacos Homepage
        </p>
      <Friends />
    
        <DatePicker style={style} width="302px" 
          onDayClick={(e, day)=> this.onDayClick(e, day)}/>     
     
      {/* <Date /> */}

      <TacoView />
    </div>
  );
  }
}

export default LoggedInApp;