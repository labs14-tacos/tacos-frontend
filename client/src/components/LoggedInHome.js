import React from 'react';
import {Link as RouterLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import sun from '../images/sun.svg';
import './loggedInHome.css';

// The new new App.js! 

const token = sessionStorage.getItem('token');


class LoggedInHome extends React.Component {

 
  render() {
  return (
    <div>
      <div className="flex-column container" > 
      <img className="image" src={sun} alt="sun eating taco" />  
      <div className="button-box">
        <div className="button-container">
        <Button component={RouterLink} id="homeButton"  to="/log-a-taco" variant="contained" size="medium" color="secondary">
          Log a Taco
        </Button>
        </div>
        <div className="button-container">
        <Button component={RouterLink} id="homeButton" to="/my-profile" variant="contained" size="medium" color="primary">
          My Profile
        </Button>
        </div>
        <div className="button-container">
        <Button component={RouterLink} id="homeButton" to="/my-tacos" variant="contained" size="medium" color="primary">
          My Tacos
        </Button>
        </div>
        <div className="button-container">
        <Button component={RouterLink} id="homeButton" to="/explore-tacos" variant="contained" size="medium" color="primary">
          Other People's Tacos
        </Button>
        </div>
        </div>
      </div>
    </div>
  );
  }
}

export default LoggedInHome;
