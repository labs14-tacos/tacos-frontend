import React, { Component } from 'react';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';



// CONFIG OBJECT -- DO NOT MERGE TO MASTER UNLESS YOU SWITCH CONFIG OBJECT TO PRODUCTION HERE 
// STAGING CONFIG
const stagingConfig = {
  apiKey: "AIzaSyAf-rgnLl6GvbQTo9WWT006Bk1-Kq8G7t4",
  authDomain: "staging-tacos.firebaseapp.com",
  databaseURL: "https://staging-tacos.firebaseio.com",
  projectId: "staging-tacos",
  storageBucket: "",
  messagingSenderId: "1019288223825",
  appId: "1:1019288223825:web:833af7aeb7c524c1" }

  // PRODUCTION CONFIG 
 const productionConfig = {
    apiKey: "AIzaSyCqppe91fxT0OMhhUeVHLqBbVClhjQl0EQ",
    authDomain: "lets-get-tacos.firebaseapp.com",
    databaseURL: "https://lets-get-tacos.firebaseio.com",
    projectId: "lets-get-tacos",
    storageBucket: "",
    messagingSenderId: "842045876194",
    appId: "1:842045876194:web:b63d3672bc440443"
  }

const envTest = {
  apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
  authDomain: `${process.env.REACT_APP_AUTH_DOMAIN}`
}



// switch config object from staging to production before merging into master!!!
firebase.initializeApp(envTest);

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