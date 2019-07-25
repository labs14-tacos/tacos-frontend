import React from 'react';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { uiConfig } from './firebaseUIConfig';

const Authentication = (Component1) =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      }
    }

    render() {
      console.log(uiConfig)
      if (!this.props.isSignedIn) {
        return <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />
      } else {
        return (
          <div>
            <button onClick={() => firebase.auth().signOut()}>Sign-out</button>
            <Component1 />
          </div>
        )
      }
    }
  }

export default Authentication;