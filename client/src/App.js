import React, { Component } from 'react';
import Login from './components/Login';
import './App.css';
import { Route } from 'react-router-dom';
import axios from 'axios';

import StarRating from './components/StarRating'

import fontawesome from '@fortawesome/fontawesome'
import solid from '@fortawesome/fontawesome-free-solid'
import regular from '@fortawesome/fontawesome-free-regular'


fontawesome.library.add(solid, regular)

class App extends Component {
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
    return (
      <div className="App">
          
          <p>
            Welcome to the <span>Let's Get Tacos!</span> React App! 
          </p>
          <StarRating  rating={7}/>
        <Route 
          exact path='/'
          render= {(props) => (
            <Login {...props} users={this.state.users} />
          )}
          />
      </div>
    );
  }
}

export default App;
