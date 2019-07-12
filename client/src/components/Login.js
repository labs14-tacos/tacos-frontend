import React, { Component } from 'react';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

const authDomain = process.env.REACT_APP_AUTH_DOMAIN;
const apiKey = process.env.REACT_APP_FIREBASE_API_KEY

const configObj = {
  apiKey: "AIzaSyAf-rgnLl6GvbQTo9WWT006Bk1-Kq8G7t4",
  authDomain: "staging-tacos.firebaseapp.com",
  databaseURL: "https://staging-tacos.firebaseio.com",
  projectId: "staging-tacos",
  storageBucket: "",
  messagingSenderId: "1019288223825",
  appId: "1:1019288223825:web:833af7aeb7c524c1"
  }


firebase.initializeApp(configObj);

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
      signInSuccess: () => false
    }
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
        {this.state.isSignedIn ? (
          <h3>You have been signed in!</h3>,
          <button onClick={() => firebase.auth().signOut()}>Sign-out</button>
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