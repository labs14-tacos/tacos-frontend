<<<<<<< HEAD
import React from 'react';
import Login from './components/loginComponents/Login';
=======

import React, { Component } from 'react';

import Login from './components/loginComponents/Login';

>>>>>>> 85a5da4d67b28ac56173043ad4e7621df9812bd8
import './App.css';
// import { Route } from 'react-router-dom';
import axios from 'axios';

import fontawesome from '@fortawesome/fontawesome'
import solid from '@fortawesome/fontawesome-free-solid'
import regular from '@fortawesome/fontawesome-free-regular'


fontawesome.library.add(solid, regular)

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
  }


  componentDidMount() {
    axios
      .get('http://localhost:3000/users')
      .then(res => {
        console.log(res.data);
        this.setState({
          users: res.data
        })
      })
      .catch(err => console.log(err));
  }



  render () {
  //     return (
  //       <div className="App">
            
  //           <p>
  //             Welcome to the <span>Let's Get Tacos!</span> React App! 
  //           </p>
  //         <Route 
  //           exact path='/'
  //           render= {(props) => (
  //             <Login {...props} users={this.state.users} />
  //           )}
  //           />
  //       </div>
  //     );
  //   }


  return (
    <div className="App">
        <p>
          Welcome to the <span>Let's Get Tacos!</span> React App! 
        </p>
      <Login />
    </div>
  );
}
<<<<<<< HEAD

export default App;
=======
}
>>>>>>> 85a5da4d67b28ac56173043ad4e7621df9812bd8
