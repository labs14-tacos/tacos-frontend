import React, { Component } from 'react';

import TacoIngredients from './TacoIngredients';
import TextField from '@material-ui/core/TextField';
import Rating from '@material-ui/lab/Rating';
import Checkbox from '@material-ui/core/Checkbox';
import DatePicker from 'react-date-picker';
import TacoImage from '../cloudinary/TacoImage';

import axios from 'axios';
import './TacoVeiw.css';

const token = sessionStorage.getItem('token');


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
    date: new Date(),
    numberOfTacos: 1,
    typedIng: '',

    tortilla: [],
    protein: [],
    cheese: [],
    topping: [],
    salsa: [],
    extraIng: [],

    crunchy: false,
  }

  onChange = date => this.setState({ date })

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
    } else this.deleteFromTortillaList(ing);
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
    } else this.deleteFromProteinList(ing)
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
    } else this.deleteFromCheeseList(ing)

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
    } else this.deleteFromToppingList(ing)
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
    } else this.deleteFromSalsaList(ing)
  }
  deleteFromSalsaList = ings => {
    this.setState({
      salsa: this.state.salsa.filter(ing => ing !== ings)
    })
  }


  addToExtraIngList = ing => {
    const extraIng = this.state.extraIng;
    if (ing.length > 0) {
    extraIng.push(ing);
    this.setState({
      extraIng
    })
    this.setState({
      typedIng: ''
    })
  } 
  }
  deleteFromExtraIngList = ings => {
    this.setState({
      extraIng: this.state.extraIng.filter(ing => ing !== ings)
    })
  }


  handleCheck = name => event => {
    this.setState({ ...this.state, crunchy: event.target.checked });
  };

  setTacoLogPhoto = tacoLogPhoto => {
    this.setState({ tacoLogPhoto })
  }

  postTacoLog = (event) => {
    event.preventDefault();
    const ingredients = {
      tortilla: this.state.tortilla,
      protein: this.state.protein,
      cheese: this.state.cheese,
      topping: this.state.topping,
      salsa: this.state.salsa,
      extraIng: this.state.extraIng,
      crunchy: this.state.crunchy
    }
    const taco = {
      nameOfTaco: this.state.nameOfTaco,
      tacoLogPhoto: this.state.tacoLogPhoto,
      restaurantName: this.state.restaurantName,
      rating: this.state.rating,
      numberOfTacos: this.state.numberOfTacos,
      t_rating: this.state.t_rating,
      a_rating: this.state.a_rating,
      c_rating: this.state.c_rating,
      o_rating: this.state.o_rating,
      notes: this.state.notes,
      date: this.state.date,
      ingredients: ingredients
    }
    console.log("taco", taco)
    axios.post(`${process.env.REACT_APP_BACKEND_URL}/tacolog`, taco, { headers: { token: token } }).then(res => console.log(res)).then(() => this.props.history.push('/my-tacos')).catch(err => console.log(err));
  }

  viewTacoLog = (event, tacolog_id) => {
    event.preventDefault();
    axios(`${process.env.REACT_APP_BACKEND_URL}/tacolog/${tacolog_id}`)
      .then(res => {
        this.setState({ tacolog: res.data })
      })
      .catch(err => console.log(err));
  }

  render() {
    console.log('taco', this.state)
    return (
      <div className="tacoLogContainer">
        <h1>Log A Taco</h1>
        <TacoIngredients
          addToTortillaList={this.addToTortillaList}
          addToProteinList={this.addToProteinList}
          addToCheeseList={this.addToCheeseList}
          addToToppingList={this.addToToppingList}
          addToSalsaList={this.addToSalsaList}
          addToExtraIngList={this.addToExtraIngList}
          deleteFromTortillaList={this.deleteFromTortillaList}
          deleteFromProteinList={this.deleteFromProteinList}
          deleteFromCheeseList={this.deleteFromCheeseList}
          deleteFromToppingList={this.deleteFromToppingList}
          deleteFromSalsaList={this.deleteFromSalsaList}
          deleteFromExtraIngList={this.deleteFromExtraIngList}
          tortilla={this.state.tortilla}
          protein={this.state.protein}
          cheese={this.state.cheese}
          topping={this.state.topping}
          salsa={this.state.salsa}
          extraIng={this.state.extraIng}
        />
        <div className='extraIng'>
          <TextField
            className='textField'
            type='text'
            name='typedIng'
            value={this.state.typedIng}
            onChange={this.handleChange}
            label='Other Ingredients:'
          />
          <button className='saveButton' onClick={() => this.addToExtraIngList(this.state.typedIng)}>Add</button>
        </div>


        <form>
          <TextField
            className='textField-num'
            type='number'
            name='numberOfTacos'
            value={this.state.numberOfTacos}
            onChange={this.handleChange}
            label="How many tacos?"
          />
          <div className='checkbox'>
            <h3>Crunchy?</h3>
            <Checkbox
              color='primary'
              name='crunchy'
              value={this.state.crunchy}
              onChange={this.handleCheck(this.state.crunchy)}
            />
          </div>
          <DatePicker
            onChange={this.onChange}
            value={this.state.date}
          />
          <TacoImage className="tacoCloud" setTacoLogPhoto={this.setTacoLogPhoto} />
          <TextField
            className='textField'
            type='text'
            name='nameOfTaco'
            value={this.state.nameOfTaco}
            onChange={this.handleChange}
            label='Taco Name'
          />
          <TextField
            className='textField'
            type='text'
            name='restaurantName'
            value={this.state.restaurantName}
            onChange={this.handleChange}
            label='Restaurant'
          />
          <TextField
            required
            className='textField'
            type='text'
            name='notes'
            value={this.state.notes}
            onChange={this.handleChange}
            label="Wanna taco 'bout it?"
          />

          <div className="ratings">
            <h2>Overall Rating: {this.state.rating}</h2>
            <Rating
              className='rating'
              name='rating'
              value={this.state.rating}
              onChange={this.handleChange}
            />
            <h3>"T" Rating: {this.state.t_rating}</h3>
            <h4>"<span>T</span>he Fundamentals"</h4>
            <Rating
              className='rating'
              name='t_rating'
              value={this.state.t_rating}
              onChange={this.handleChange}
            />
            <h3>"A" Rating: {this.state.a_rating}</h3>
            <h4>"<span>A</span>lways Different, Positive, Special"</h4>
            <Rating
              className='rating'
              name='a_rating'
              value={this.state.a_rating}
              onChange={this.handleChange}
            />
            <h3>"C" Rating: {this.state.c_rating}</h3>
            <h4>"<span>C</span>onsistent Commitment"</h4>
            <Rating
              className='rating'
              name='c_rating'
              value={this.state.c_rating}
              onChange={this.handleChange}
            />
            <h3>"O" Rating: {this.state.o_rating}</h3>
            <h4>"<span>O</span>h, Wow!"</h4>
            <Rating
              className='rating'
              name='o_rating'
              value={this.state.o_rating}
              onChange={this.handleChange}
            />
          </div>
          <button className="saveButton" type='submit' onClick={this.postTacoLog}>Save Taco Log</button>
        </form>

      </div>
    )
  }
}

export default TacoView;