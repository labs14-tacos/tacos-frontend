import React, { Component } from 'react';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import LoggedInApp from '../LoggedInApp';
import axios from 'axios';

// import User from './User'



const configObject = {
  apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
  authDomain: `${process.env.REACT_APP_AUTH_DOMAIN}`
} 


firebase.initializeApp(configObject);


const backendURL = process.env.REACT_APP_BACKEND_URL; 

class Login extends Component {
  state = {
    isSignedIn: false,
    user: {},
    token: ''
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
      signInSuccessWithAuthResults: () => {
        this.postToSQL();
        return false;
      }
      }
    
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({
        isSignedIn: user,
        // This grabs the user's key from the firebaseLocalStorage.
      }) 
  
      // This line takes the user's key that we just grabbed and set's it as the token in the Session Storage.
     const token = firebase.auth().currentUser._lat
      sessionStorage.setItem("token", token); 
      this.setState({token});
    console.log("component did mount login")
    console.log(`${token}`, "token")
    })
    
  }

  postToSQL = () => {
    axios.post(`${backendURL}/api/users`,  
    {"token": sessionStorage.getItem("token")}, 
    {headers: {"Access-Control-Allow-Origin": "*"}}
     )
      .then(res => console.log("IT WORKED", res))
      .catch(err => {console.log("it didn't work", err.code, err.detail)})
    console.log("sign in with success after post")
  }

  fbSignOut = () => {
    // This makes sure that the token is taken out of Session Storage as soon as the user is logged out.
    firebase.auth().signOut();
    sessionStorage.removeItem("token");
    this.setState({
      isSignedIn: false
    });
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
    );
  }
}

export default Login;