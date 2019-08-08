
import React from 'react';
import Friends from './Friends.js';
import TacoView from './TacoLog/TacoView';
import editTacoLog from './TacoLog/editTacoLog';
import UpdateUserProfile from './UpdateUserProfile';

// The new App.js! 

class LoggedInApp extends React.Component {
  render() {
  return (
    <div className="App">
        <p>
          Let's Get Tacos Homepage
        </p>
      <Friends />
      <editTacoLog />
      <UpdateUserProfile />
      <TacoView />
    </div>
  );
  }
}

export default LoggedInApp;
