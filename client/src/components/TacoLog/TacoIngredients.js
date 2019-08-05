import React, { Component } from 'react';
import { proteins, } from './ingredients';

class TacoIngredients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      proteins: proteins,
    }
  }

  addToIngList = ing => {
    this.props.addToIngList(ing);
  }
  
  render() {
    return (
      <div>
        <div>
          <h2>Ingredients:</h2>
          {this.props.protein.map(ing => (
            <span>{ing}</span>
          ))}
        </div>
        {this.state.proteins.map(protein => <button onClick={ () => {this.addToIngList(protein)}}>{protein}</button>)}
      </div>
    )
  }
}

export default TacoIngredients;