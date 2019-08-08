import React, { Component } from 'react';
import Login from './components/loginComponents/Login';
import './App.css';
import { Route } from 'react-router-dom';
import TacoLogHomepage from './components/user/TacoLogHomepage'
import MyProfile from './components/user/MyProfile'
import UserTacoImage from './components/cloudinary/UserTacoImage'
import './App.css';

class App extends Component {
 
  render() {

    return (
      <div className="App">
        <p>
          Welcome to the <span>Let's Get Tacos!</span> React App!
        </p>
        <Login />
        <Route exact path="/tacoimage" component={UserTacoImage} />
        <Route exact path="/myprofile" component={MyProfile}/>
        <Route exact path="/user" component={TacoLogHomepage} />
      </div>
    );
  }
}

export default App;