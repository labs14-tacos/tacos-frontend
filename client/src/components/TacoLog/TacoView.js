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
    tortilla: [],
    protein: [],
    cheese: [],
    topping: [],
    salsa: [],
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

  addToTortillaList = ing => {
    const tortilla = this.state.tortilla;
    if (!tortilla.includes(ing)) {
      tortilla.push(ing);
      this.setState({
        tortilla
      })
    }
  }
  deleteFromTortillaList = ings => {
    this.setState({
      tortilla: this.state.tortilla.filter(ing => ing !== ings)
    })
  }

  addToProteinList = ing => {
    const protein = this.state.protein;
    if (!protein.includes(ing)) {
      protein.push(ing);
      this.setState({
        protein
      })
    }
  }
  deleteFromProteinList = ings => {
    this.setState({
      protein: this.state.protein.filter(ing => ing !== ings)
    })
  }

  addToCheeseList = ing => {
    const cheese = this.state.cheese;
    if (!cheese.includes(ing)) {
      cheese.push(ing);
      this.setState({
        cheese
      })
    }

  }
  deleteFromCheeseList = ings => {
    this.setState({
      cheese: this.state.cheese.filter(ing => ing !== ings)
    })
  }

  addToToppingList = ing => {
    const topping = this.state.topping;
    if (!topping.includes(ing)) {
      topping.push(ing);
      this.setState({
        topping
      })
    }
  }
  deleteFromToppingList = ings => {
    this.setState({
      topping: this.state.topping.filter(ing => ing !== ings)
    })
  }

  addToSalsaList = ing => {
    const salsa = this.state.salsa;
    if (!salsa.includes(ing)) {
      salsa.push(ing);
      this.setState({
        salsa
      })
    }
  }
  deleteFromSalsaList = ings => {
    this.setState({
      salsa: this.state.salsa.filter(ing => ing !== ings)
    })
  }





  render() {
    console.log("state", this.state)
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
          addToTortillaList={this.addToTortillaList}
          addToProteinList={this.addToProteinList}
          addToCheeseList={this.addToCheeseList}
          addToToppingList={this.addToToppingList}
          addToSalsaList={this.addToSalsaList}
          deleteFromTortillaList={this.deleteFromTortillaList}
          deleteFromProteinList={this.deleteFromProteinList}
          deleteFromCheeseList={this.deleteFromCheeseList}
          deleteFromToppingList={this.deleteFromToppingList}
          deleteFromSalsaList={this.deleteFromSalsaList}
          tortilla={this.state.tortilla}
          protein={this.state.protein}
          cheese={this.state.cheese}
          topping={this.state.topping}
          salsa={this.state.salsa}
        />
        <div>
          <h2>Do you wanna taco 'bout it?</h2>
          <input
            type='text'
            name='notes'
            value={this.state.tacoEntry.notes}
            onChange={this.handleChange}
          />
        </div>
      </div>
    )
  }
}

export default TacoView;