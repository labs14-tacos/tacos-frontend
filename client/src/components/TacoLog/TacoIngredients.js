import React, { Component } from 'react';
import {proteins, } from './ingredients';

class TacoIngredients extends Component {
  state = {
    proteins: proteins,
  }
  render() {
    return (
      <div>
        {this.state.proteins.map(protein => <p>{protein}</p>)}
      </div>
    )
  }
}

export default TacoIngredients;