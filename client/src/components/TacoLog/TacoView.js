import React, { Component } from 'react';

import TacoIngredients from './TacoIngredients';
import TextField from '@material-ui/core/TextField';
import Rating from '@material-ui/lab/Rating';
import Checkbox from '@material-ui/core/Checkbox';

import axios from 'axios';


class TacoView extends Component {
  state = {
    nameOfTaco: '',
    tacoLogPhoto: '',
    restaurantName: '',
    rating: null,
    t_rating: null,
    a_rating: null,
    c_rating: null,
    o_rating: null,
    notes: '',
    date: '',

    tortilla: [],
    protein: [],
    cheese: [],
    topping: [],
    salsa: [],

    crunchy: false,
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

  handleCheck = name => event => {
    this.setState({ ...this.state, crunchy: event.target.checked });
  };

  postTacoLog = (event) => {
    event.preventDefault();
    axios(`${process.env.REACT_APP_BACKEND_URL}/tacolog`, {/**insert taco log here */}).then(res => console.log(res)).catch(err => console.log(err));
  }

  viewTacoLog = (event, tacolog_id) => {
    event.preventDefault();
    axios(`${process.env.REACT_APP_BACKEND_URL}/tacolog/${tacolog_id}`)
      .then(res => this.setState({ tacolog: res.data }))
      // fix this to be consistent 
      .catch(err => console.log(err));
  }

  render() {
    console.log("state", this.state)
    return (

      <div>
        <div>
          <h1>Log A Taco:</h1>
          <button onClick={this.postTacolog}>Save</button>
        </div>
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
          <h3>Crunchy?</h3>
          <Checkbox
            name='crunchy'
            value={this.state.crunchy}
            onChange={this.handleCheck(this.state.crunchy)}
          />
        </div>
        <div>
          <h2>Overall Rating: {this.state.rating}</h2>
          <Rating
            name='rating'
            value={this.state.rating}
            onChange={this.handleChange}
          />
          <h3>"T" Rating: {this.state.t_rating}</h3>
          <h4>"<span>T</span>he Fundamentals"</h4>
          <Rating
            name='t_rating'
            value={this.state.t_rating}
            onChange={this.handleChange}
          />
          <h3>"A" Rating: {this.state.a_rating}</h3>
          <h4>"<span>A</span>lways Different, Positive, Special"</h4>
          <Rating
            name='a_rating'
            value={this.state.a_rating}
            onChange={this.handleChange}
          />
          <h3>"C" Rating: {this.state.c_rating}</h3>
          <h4>"<span>C</span>onsistent Commitment"</h4>
          <Rating
            name='c_rating'
            value={this.state.c_rating}
            onChange={this.handleChange}
          />
          <h3>"O" Rating: {this.state.o_rating}</h3>
          <h4>"<span>O</span>h, Wow!"</h4>
          <Rating
            name='o_rating'
            value={this.state.o_rating}
            onChange={this.handleChange}
          />
        </div>
      </div>
    )
  }
}

export default TacoView;