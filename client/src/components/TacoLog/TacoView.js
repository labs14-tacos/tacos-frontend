import React, { Component } from 'react';

//import DatePicker from './DatePicker';
import TacoIngredients from './TacoIngredients';
import TextField from '@material-ui/core/TextField';
import StarRatingComponent from 'react-star-rating-component';

const style = {
  position: "relative",
  margin: "50px auto"
}



class TacoView extends Component {
  state = {
    nameOfTaco: '',
    tacoLogPhoto: '',
    restaurantName: '',
    rating: null,
    notes: '',
    date: '',

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

  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
  }


  render() {
    console.log("state", this.state)
    return (

      <div>
        <form>
          <TextField
            type='text'
            name='date'
            value={this.state.date}
            onChange={this.handleChange}
            label='Date'
          />
          <TextField
            type='text'
            name='nameOfTaco'
            value={this.state.nameOfTaco}
            onChange={this.handleChange}
            label='Taco Name'
          />
          <TextField
            type='text'
            name='restaurantName'
            value={this.state.restaurantName}
            onChange={this.handleChange}
            label='Restaurant'
          />
          <TextField
            type='text'
            name='notes'
            value={this.state.notes}
            onChange={this.handleChange}
            label="Wanna taco 'bout it?"
          />
        </form>
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
        <h2>Overall Rating: {this.state.rating}</h2>
        <StarRatingComponent 
          name='rate1' 
          starCount={5}
          starColor = "#a1dd70"
          value={this.state.rating}
          //renderStarIcon={() => <span></span>}
          onStarClick={this.onStarClick.bind(this)}
        />
      </div>
      </div>
    )
  }
}

export default TacoView;