import React, { Component } from 'react';
import { proteins, cheese, toppings, salsa, tortillas } from './ingredients';
import Tabs from './tabs/Tabs';


class EditTacoIngredients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tortilla: this.props.tortilla,
      protein: this.props.protein, 
      cheese: this.props.cheese,
      topping: this.props.topping,
      salsa: this.props.salsa,
      extraIng: this.props.extraIng
    };
  };
  componentDidUpdate(prevProps){
    console.log("component did update")
    if(prevProps !== this.props){
      this.setState({tortilla: this.props.tortilla,
        protein: this.props.protein, 
        cheese: this.props.cheese,
        topping: this.props.topping,
        salsa: this.props.salsa,
        extraIng: this.props.extraIng})
    }
  }
  
  render() {
   console.log("tortilla state", this.state.tortilla)
    return (
      <div>
        <div>
          <h2>Description of Taco:</h2>
          {this.state.tortilla.map(ing => ( 
            console.log("tortilla in map"),
            <span className="blkIng" onClick={() => { this.props.deleteFromTortillaList(ing) }}>{ing + ', '}</span>
          ))}
          {this.state.protein.map(ing => (
            <span className="redIng" onClick={() => { this.props.deleteFromProteinList(ing) }}>{ing + ', '}</span>
          ))}
          {this.state.cheese.map(ing => (
            <span className="blkIng" onClick={() => { this.props.deleteFromCheeseList(ing) }}>{ing + ', '}</span>
          ))}
          {this.state.topping.map(ing => (
            <span className="redIng" onClick={() => { this.props.deleteFromToppingList(ing) }}>{ing + ', '}</span>
          ))}
          {this.state.salsa.map(ing => (
            <span className="blkIng" onClick={() => { this.props.deleteFromSalsaList(ing) }}>{ing + ', '}</span>
          ))}
          {this.state.extraIng.map(ing => (
            <span className="redIng" onClick={() => { this.props.deleteFromExtraIngList(ing) }}>{ing + ', '}</span>
          ))}
        </div>
        <Tabs>
        <div label="Tortillas">
            {tortillas.map(tortilla => <button className="ingBtn" onClick={() => { this.props.addToTortillaList(tortilla) }}>{tortilla}</button>)}
          </div>
          <div label="Proteins">
            {proteins.map(protein => <button className="ingBtn" onClick={() => { this.props.addToProteinList(protein) }}>{protein}</button>)}
          </div>
          <div label="Cheeses">
            {cheese.map(cheese => <button className="ingBtn" onClick={() => { this.props.addToCheeseList(cheese) }}>{cheese}</button>)}
          </div>
          <div label="Toppings">
            {toppings.map(topping => <button className="ingBtn" onClick={() => { this.props.addToToppingList(topping) }}>{topping}</button>)}
          </div>
          <div label="Salsas">
            {salsa.map(salsa => <button className="ingBtn" onClick={() => { this.props.addToSalsaList(salsa) }}>{salsa}</button>)}
          </div>
        </Tabs>

      </div>
    )
  }
}


export default EditTacoIngredients;