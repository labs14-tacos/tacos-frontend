import React from 'react';
import TextField from '@material-ui/core/TextField';
import PhotoUpload from '../../components/cloudinary/TacoImage'
import Rating from '@material-ui/lab/Rating';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
=======
import { Button, Paper, Container } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import axios from 'axios';
import EditTacoIngredients from './EditTacoIngredients';

// we'll need to flip between this and the actual tacolog view or we won't have a way to edit it because we need the taco log id. 
const token = sessionStorage.getItem("token")


class EditTacoLog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tacoLogPhoto: this.props.location.state.taco.tacoLogPhoto,
      nameOfTaco: this.props.location.state.taco.nameOfTaco,
      restaurantName: this.props.location.state.taco.restaurantName,
      numberOfTacos: this.props.location.state.taco.numberOfTacos,
      rating: this.props.location.state.taco.rating,
      t_rating: this.props.location.state.taco.t_rating,
      a_rating: this.props.location.state.taco.a_rating,
      c_rating: this.props.location.state.taco.c_rating,
      o_rating: this.props.location.state.taco.o_rating,
      notes: this.props.location.state.taco.notes,
      id: this.props.location.state.taco.id,
      firebaseId: this.props.location.state.taco.firebaseId,
      tortilla: this.props.location.state.taco_ingredients.tortilla,
      protein: this.props.location.state.taco_ingredients.protein,
      cheese: this.props.location.state.taco_ingredients.cheese,
      topping: this.props.location.state.taco_ingredients.topping,
      salsa: this.props.location.state.taco_ingredients.salsa,
      extraIng: this.props.location.state.taco_ingredients.extraIng,
      crunchy: this.props.location.state.taco_ingredients.crunchy, 
      typedIng: ''
    };
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
    } else this.deleteFromTortillaList(ing)
  }

  deleteFromTortillaList = ings => {
    this.setState(prevState => ({
      tortilla: prevState.tortilla.filter(ing => ing != ings)
    }))
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
    this.setState(prevState => ({
      protein: prevState.protein.filter(ing => ing != ings)
    }))
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
    this.setState(prevState => ({
      cheese: prevState.cheese.filter(ing => ing != ings)
    }))
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
    this.setState(prevState => ({
      topping: prevState.topping.filter(ing => ing != ings)
    }))
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
    this.setState(prevState => ({
      salsa: prevState.salsa.filter(ing => ing != ings)
    }))
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
    this.setState(prevState => ({
      extraIng: prevState.extraIng.filter(ing => ing != ings)
    }))
  }

  updateLog = () => {
    const ingredients = {
      tortilla: this.state.tortilla,
      protein: this.state.protein,
      cheese: this.state.cheese,
      topping: this.state.topping,
      salsa: this.state.salsa,
      extraIng: this.state.extraIng,
      crunchy: this.state.crunchy
    }
    const tacoLog = {
      nameOfTaco: this.state.nameOfTaco,
      restaurantName: this.state.restaurantName,
      numberOfTacos: this.state.numberOfTacos,
      rating: this.state.rating,
      t_rating: this.state.t_rating,
      a_rating: this.state.a_rating,
      c_rating: this.state.c_rating,
      o_rating: this.state.o_rating,
      notes: this.state.notes,
      ingredients: ingredients,
      tacoLogPhoto: this.state.tacoLogPhoto
    };
    axios.put(`${process.env.REACT_APP_BACKEND_URL}/tacolog/${this.state.id}`, tacoLog,
      { headers: { token: token } })
      .then(res => {
        this.props.history.push('/my-tacos')
      })
      .catch(err => console.log({ err }));
  };

  setTacoPhoto = tacoLogPhoto => {
    this.setState({ tacoLogPhoto })
  }

  wipePhoto = () => {
    this.setState({
      tacoLogPhoto: '',

    })
  }

  render() {
    console.log(this.state.tortilla, "why is this doing weird tortilla things")
    return (
      <>
        <Paper>
          <h2 className="form-heading">Update Taco Log</h2>

          {
            this.state.tacoLogPhoto ?
              <Container className="changeImg">
                <img className="avatar-image" src={this.state.tacoLogPhoto} alt="" />
                <Button className='saveButton' onClick={() => this.wipePhoto()}>Change my photo</Button>
              </Container>
              :
              <PhotoUpload id="photo-container" onClick={() => this.wipePhoto()}
                setTacoLogPhoto={this.setTacoPhoto}

              />
          }


          {this.state.tortilla &&
           <EditTacoIngredients
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
          />} 
            <EditTacoIngredients
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
            />}

          <form className="edit-form">
          <Container className='extraIng'>
          <TextField
            className='textField'
            type='text'
            name='typedIng'
            value={this.state.typedIng}
            onChange={this.handleChange}
            label='Other Ingredients:'
          />
          <Button className='saveButton' onClick={() => this.addToExtraIngList(this.state.typedIng)}>Add</Button>
        </Container>
            <TextField
              className='textField-num'
              type='number'
              name='numberOfTacos'
              value={this.state.numberOfTacos}
              onChange={this.handleChange}
              label="How many tacos?"
            />
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

            <Container className="ratings">
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
            </Container>
            <Button className="saveButton" type='submit' component={RouterLink} to="/my-tacos" onClick={this.updateLog}>Save Taco Log</Button>
          </form>
        </Paper>
      </>
    );
  }
}

export default EditTacoLog;
