import React from 'react';
import Friends from './Friends.js';

// The new App.js! 

function LoggedInApp() {
  return (
    <div className="App">
        <p>
          Let's Get Tacos Homepage
        </p>
      <Friends />
    </div>
  );
}

export default LoggedInApp;