
import React from 'react';
import Friends from './Friends.js';
import TacoView from './TacoLog/TacoView';
import EditTacoLog from './TacoLog/editTacoLog';
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
<<<<<<< HEAD
      <EditTacoLog />
      <UpdateUserProfile />
    
        <DatePicker style={style} width="302px" 
          onDayClick={(e, day)=> this.onDayClick(e, day)}/>     
     
      {/* <Date /> */}

=======
      <editTacoLog />
      <UpdateUserProfile />
>>>>>>> 17720c1a58dbe67295ea6da30f38bc38201ac1b2
      <TacoView />
    </div>
  );
  }
}

export default LoggedInApp;
