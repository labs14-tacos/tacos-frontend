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
    },
    cheese: [],
    protein: ['crickets', 'pumpkin', 'lollipop'],
    salsa: [],
    topping: [],
    tortilla: [],
    crunchy: null
  }

  onDayClick = (e, day) => {
    alert(day);
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  addToIngList = ing => {
    const protein = this.state.protein;
    protein.push(ing);
    this.setState({
      protein
    })
    console.log(protein)
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
            value={this.state.tacoName}
            onChange={this.handleChange}
          />
          <h2>Type of Taco:</h2>
          <input
            type='text'
            name='typeOfTaco'
            value={this.state.typeOfTaco}
            onChange={this.handleChange}
          />
          <h2>Restaurant Name:</h2>
          <input
            type='text'
            name='restaurantName'
            value={this.state.restaurantName}
            onChange={this.handleChange}
          />
          <h2>Restaurant Address:</h2>
          <input
            type='text'
            name='address'
            value={this.state.address}
            onChange={this.handleChange}
          />
        </div>
        <TacoIngredients
          addToIngList={this.addToIngList}
          protein={this.state.protein}
        />
        <div>
          <h2>Do you wanna taco 'bout it?</h2>
          <input
            type='text'
            name='notes'
            value={this.state.notes}
            onChange={this.handleChange}
          />
        </div>
      </div>
    )
  }
}

export default TacoView;