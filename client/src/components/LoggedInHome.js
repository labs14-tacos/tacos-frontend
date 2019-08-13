import React from 'react';
import axios from 'axios';
import {Link as RouterLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import sun from '../images/sun.svg';

// The new App.js! 

const token = sessionStorage.getItem('token');


class LoggedInHome extends React.Component {

 
  render() {
  return (
    <div>
     
      <div className="flex-column container">
      <img className="image" src={sun} alt="sun eating taco" />  
      <div className="button-box">
        <div className="button-container">
        <Button component={RouterLink}  to="/log-a-taco" variant="contained" size="medium" color="primary">
          Log a Taco
        </Button>
        </div>
        <div className="button-container">
        <Button component={RouterLink}  to="/my-profile" variant="contained" size="medium" color="primary">
          My Profile
        </Button>
        </div>
        <div className="button-container">
        <Button component={RouterLink} to="/my-tacos" variant="contained" size="medium" color="primary">
          My Tacos
        </Button>
        </div>
        <div className="button-container">
        <Button component={RouterLink} to="/explore-tacos" variant="contained" size="medium" color="primary">
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
