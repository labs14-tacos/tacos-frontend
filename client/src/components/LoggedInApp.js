import React from 'react';
import Friends from './Friends.js';
import TacoView from './TacoLog/TacoView';

// The new App.js! 

function LoggedInApp() {
  return (
    <div className="App">
        <p>
          Let's Get Tacos Homepage
        </p>
      <Friends />
      <TacoView />
    </div>
  );
}

export default LoggedInApp;