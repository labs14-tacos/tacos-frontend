import React, { Component } from 'react';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import LoggedInApp from '../LoggedInApp';

// import User from './User'



const configObject = {
  apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
  authDomain: `${process.env.REACT_APP_AUTH_DOMAIN}`
}

firebase.initializeApp(configObject);

class Login extends Component {
  state = {
    isSignedIn: false,
    user: {}
  }

  uiConfig = {
    signInFlow: 'popup',
    signInOptions: [
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccessWithAuthResults: () => false
    }
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({
        isSignedIn: user,
        // This grabs the user's key from the firebaseLocalStorage.
        user: firebase.auth().currentUser._lat
      })
      // This line takes the user's key that we just grabbed and set's it as the token in the Session Storage.
      sessionStorage.setItem("token", firebase.auth().currentUser._lat)
    })
  }

  fbSignOut = () => {
    // This makes sure that the token is taken out of Session Storage as soon as the user is logged out.
    firebase.auth().signOut();
    sessionStorage.removeItem("token");
    this.setState({
      isSignedIn: false
    })
  }

  render() {
    return (
      <div>
        {/* When you are logged in, you will be able to see the "new App.js". If you are not signed in, you will only be able to see the log-in prompt and anything else in the OG App.js. */}
        {this.state.isSignedIn ? (
          <div>
            <h3>You have been signed in!</h3>
            <button onClick={this.fbSignOut}>Sign-out</button>
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