import React, { Component } from 'react';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import LoggedInApp from '../LoggedInApp';

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

  uiConfig = {
    signInFlow: 'popup',
    signInOptions: [
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccessWithAuthResults: () => false
    }
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({
        isSignedIn: user
      })
    })
  }

  render() {
    return (
      <div>
        {this.state.isSignedIn ? (
          <div>
            <h3>You have been signed in!</h3>
            <button onClick={() => firebase.auth().signOut()}>Sign-out</button>
            <LoggedInApp />
          </div>
        ) : (
            <StyledFirebaseAuth
              uiConfig={this.uiConfig}
              firebaseAuth={firebase.auth()}
            />
          )}
      </div>
    )
  }
}

export default Login;