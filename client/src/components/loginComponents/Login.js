import React, { Component } from 'react';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
<<<<<<< HEAD:client/src/components/loginComponents/Login.js
import LoggedInApp from '../LoggedInApp';
=======

// import User from './User'


>>>>>>> 3c0c2fdc0f8a41b682ee74dc631731c054cc88ce:client/src/components/Login.js

import LoggedInApp from '../LoggedInApp';


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
        {/* When you are logged in, you will be able to see the "new App.js". If you are not signed in, you will only be able to see the log-in prompt and anything else in the OG App.js. */}
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
          {/* <User /> */}
      </div>
    )
  }
}

export default Login;