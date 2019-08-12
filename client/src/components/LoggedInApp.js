
import React from 'react';
import Friends from './Friends.js';
import TacoView from './TacoLog/TacoView';
import EditTacoLog from './TacoLog/editTacoLog';
import UpdateUserProfile from './UpdateUserProfile';
import UserTacoImage from './user/TacoUser';
import MyProfile from './user/MyProfile';
import TacoLogHomepage from './TacoLog/TacoView';
import MyTacoList from './MyTacoList';
import OthersTacos from './OthersTacos';
import LoggedInHome from './LoggedInHome.js';
import axios from 'axios';
import { Route, Link as RouterLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import sun from '../images/sun.svg';

// The new App.js! 

const token = sessionStorage.getItem('token');


class LoggedInApp extends React.Component {

 
  render() {
  return (
    <div className="App">
        <p>
          Let's Get Tacos Homepage
        </p>
      <Friends />
      <EditTacoLog />
      <UpdateUserProfile />
    
        <DatePicker style={style} width="302px" 
          onDayClick={(e, day)=> this.onDayClick(e, day)}/>     
     
      {/* <Date /> */}

      <TacoView />
    <div>
     

        
        <Route exact path="/" component={LoggedInHome} />
        <Route exact path="/log-a-taco" component={TacoView} />
        <Route exact path="/my-tacos" component={MyTacoList}/>
        <Route exact path="/explore-tacos" component={OthersTacos} />
        <Route exact path="/tacoimage" component={UserTacoImage} />
        <Route exact path="/my-profile" component={MyProfile}/>
        <Route exact path="/user" component={TacoLogHomepage} />
    </div>
  );
  }
}

export default LoggedInApp;
