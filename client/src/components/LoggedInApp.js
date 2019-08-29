
import React from 'react';
import TacoView from './TacoLog/TacoView';
import EditTacoLog from './TacoLog/editTacoLog';
import UpdateUserProfile from './UpdateUserProfile';
import User from './User';
import TacoLogHomepage from './TacoLog/TacoView';
import MyTacoList from './MyTacoList';
import OthersTacos from './OthersTacos';
import LoggedInHome from './LoggedInHome.js';
import { Route, Link as RouterLink } from 'react-router-dom';
import Taco from '../components/Taco';
import Tacofan from '../components/TacoFan.js';
import MyTaco from './MyTaco.js';
// The new App.js! 

const token = sessionStorage.getItem('token');


class LoggedInApp extends React.Component {


  render() {
    return (
      <div>
        <Route exact path="/" component={LoggedInHome} />
        <Route exact path="/log-a-taco" component={TacoView} />
        <Route exact path="/my-tacos" component={MyTacoList} />
        <Route exact path="/explore-tacos" component={OthersTacos} />
        <Route exact path="/my-profile" component={User} />
        <Route exact path="/update-profile" component={UpdateUserProfile} />
        <Route exact path="/user" component={TacoLogHomepage} />
        <Route exact path="/taco" component={Taco} />
        <Route exact path="/tacofan" component={Tacofan} />
        <Route exact path="/my-taco" component={MyTaco} />
        <Route exact path="/edit-taco" component={EditTacoLog} />
      </div>
    );
  }
}

export default LoggedInApp;
