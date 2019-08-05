import React, { Component } from 'react';

import DatePicker from './DatePicker';
import TacoIngredients from './TacoIngredients';

const style = {
  position: "relative",
  margin: "50px auto"
}

class TacoView extends Component {
  state = {
    tacoEntry: {
      typeOfTaco: '',
      tacoName: '',
      tacoLogPhoto: '',
      restaurantName: '',
      // rating
      notes: '',
      date: '',
      address: ''
    }
  }

  onDayClick = (e, day) => {
    alert(day);
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <div>
        <div>
          <h1>Log A Taco:</h1>
          <button>Save</button>
        </div>
        <DatePicker
          style={style}
          width="302px"
          onDayClick={(e, day) => this.onDayClick(e, day)}
        />
        <div>
          <h2>Name of Taco:</h2>
          <input
            type='text'
            name='tacoName'
          />
          <h2>Type of Taco:</h2>
          <input
            type='text'
            name='typeOfTaco'
          />
          <h2>Restaurant Name:</h2>
          <input
            type='text'
            name='restaurantName'
          />
          <h2>Restaurant Address:</h2>
          <input
            type='text'
            name='address'
          />
        </div>
        <div>

        </div>
        <TacoIngredients />
        <div>
          <h2>Do you wanna taco 'bout it?</h2>
          <input
            type='textarea'
            name='notes'
          />
        </div>
      </div>
    )
  }
}

export default TacoView;