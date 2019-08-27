import React, { Component } from 'react';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import LoggedInApp from '../LoggedInApp';
import axios from 'axios';
import NavBar from '../NavBar'
import tacoImg from '../../images/tacos.png'
import './login.css'

// import User from './User'



const configObject = {
  apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
  authDomain: `${process.env.REACT_APP_AUTH_DOMAIN}`,
  signInSuccessUrl: "http://localhost:3000"
} 


firebase.initializeApp(configObject);


const backendURL = process.env.REACT_APP_BACKEND_URL || process.env.BACKEND_URL; 

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
        return false;
      }
      }
    
  }

  componentDidMount = () => {
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(async user => {
      
      const token = await firebase.auth().currentUser._lat
      this.setState({token, isSignedIn: user});
      console.log('component did mount click buttons')
      // this.setState({
      //   isSignedIn: user,
      //   // This grabs the user's key from the firebaseLocalStorage.
      // }) 
      await sessionStorage.setItem("token", token); 
      this.postToSQL();
      // This line takes the user's key that we just grabbed and set's it as the token in the Session Storage.
    console.log("component did mount login")
    // console.log(`${token}`, "token")
    })

  }

   // Make sure we un-register Firebase observers when the component unmounts.
   componentWillUnmount() {
    this.unregisterAuthObserver();
  }

  // this is what is adding the user to our SQL database. It pulls the information from the Firebase token and inserts it into our table
  postToSQL = () => {
    console.log("postToSQL", sessionStorage.getItem("token"));
    const bodyToken = sessionStorage.getItem("token");
    axios.post(`${backendURL}/api/users`, {token: `${bodyToken}` }, {token: bodyToken }).then(res => console.log("IT WORKED", res)).catch(err => {console.log("it didn't work", err.code, err.detail)})
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
              {/* <h3>You have been signed in!</h3> */}
              <NavBar signout={this.fbSignOut}/>
              
              <LoggedInApp />
            </div>
          ) : (
            <div className="firebase_auth">
                  <h1>Let's Get Tacos!</h1>
                  <p>Log your favorite tacolicious tacos with your personal taco logger</p>
                  <img src={tacoImg} alt=""/>
                  <StyledFirebaseAuth
                    uiConfig={this.uiConfig}
                    firebaseAuth={firebase.auth()}
                   />   
            </div>        
            )}
        </div>
      
    );
  }
}

export default Login;