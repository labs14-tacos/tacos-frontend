import React, { Component } from 'react';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import Authentication from './Authentication';

const authDomain = process.env.REACT_APP_AUTH_DOMAIN;
const apiKey = process.env.REACT_APP_FIREBASE_API_KEY;



const configObject = {
  apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
  authDomain: `${process.env.REACT_APP_AUTH_DOMAIN}`
}

firebase.initializeApp(configObject);

class Login extends Component {
  state = {
    isSignedIn: false
  }

  

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({
        isSignedIn: !!user
      })
    })
  }

  render() {
    return (
      <div>
        <Authentication 
          isSignedIn={this.state.isSignedIn}
        />
      </div>
    )
  }
}

export default Login;