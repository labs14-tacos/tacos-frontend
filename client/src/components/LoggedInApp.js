
import React from 'react';
import Friends from './Friends.js';
import TacoView from './TacoLog/TacoView';
import editTacoLog from './TacoLog/editTacoLog';
import UpdateUserProfile from './UpdateUserProfile';
import axios from 'axios';

// The new App.js! 

const token = sessionStorage.getItem('token');

const backendURL = process.env.REACT_APP_BACKEND_URL; 

class LoggedInApp extends React.Component {

  componentDidMount() {
    axios.post(`${backendURL}/api/users`, {headers: {token: `${token}`}}).then(res => console.log("IT WORKED")).catch(err => {console.log("it didn't work", err)})
  
  }
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
