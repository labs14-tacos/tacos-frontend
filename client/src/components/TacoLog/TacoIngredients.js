import React, { Component } from 'react';
import { proteins, cheese, toppings, salsa, tortillas } from './ingredients';

import Tabs from './tabs/Tabs';

class TacoIngredients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      proteins: proteins,
      cheese: cheese,
      toppings: toppings,
      salsa: salsa,
      tortillas: tortillas
    }
  }

  render() {
    return (
      <div>
        <div>
          <h2>Description of Taco:</h2>
          {this.props.tortilla.map(ing => (
            <span className="tortilla" onClick={() => { this.props.deleteFromTortillaList(ing) }}>{ing}</span>
          ))}
          {this.props.protein.map(ing => (
            <span className="protein" onClick={() => { this.props.deleteFromProteinList(ing) }}>{ing}</span>
          ))}
          {this.props.cheese.map(ing => (
            <span className="cheese" onClick={() => { this.props.deleteFromCheeseList(ing) }}>{ing}</span>
          ))}
          {this.props.topping.map(ing => (
            <span className="topping" onClick={() => { this.props.deleteFromToppingList(ing) }}>{ing}</span>
          ))}
          {this.props.salsa.map(ing => (
            <span className="salsa" onClick={() => { this.props.deleteFromSalsaList(ing) }}>{ing}</span>
          ))}
        </div>
        <Tabs>
        <div label="Tortillas">
            {this.state.tortillas.map(tortilla => <button onClick={() => { this.props.addToTortillaList(tortilla) }}>{tortilla}</button>)}
          </div>
          <div label="Proteins">
            {this.state.proteins.map(protein => <button onClick={() => { this.props.addToProteinList(protein) }}>{protein}</button>)}
          </div>
          <div label="Cheeses">
            {this.state.cheese.map(cheese => <button onClick={() => { this.props.addToCheeseList(cheese) }}>{cheese}</button>)}
          </div>
          <div label="Toppings">
            {this.state.toppings.map(topping => <button onClick={() => { this.props.addToToppingList(topping) }}>{topping}</button>)}
          </div>
          <div label="Salsas">
            {this.state.salsa.map(salsa => <button onClick={() => { this.props.addToSalsaList(salsa) }}>{salsa}</button>)}
          </div>
        </Tabs>

      </div>
    )
  }
}

export default TacoIngredients;