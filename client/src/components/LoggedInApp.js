import React, { Component } from 'react';
import Friends from './Friends.js';
import DatePicker from './TacoLog/DatePicker'



// The new App.js! 

function LoggedInApp() {
  return (
    <div className="App">
        <p>
          Let's Get Tacos Homepage
        </p>
      <Friends />
      {/* <Date /> */}
    </div>
  );
}

export default LoggedInApp;