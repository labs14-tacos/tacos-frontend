import React, { Component } from 'react';

import DatePicker from './DatePicker';
import NameOfTaco from './NameOfTaco';
import TacoIngredients from './TacoIngredients';
import TacoFreeform from './TacoFreeform';

const style = {
  position: "relative",
  margin: "50px auto"
}

class TacoView extends Component {
  onDayClick = (e, day) => {
    alert(day);
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
          onDayClick={(e, day)=> this.onDayClick(e, day)}/> 
        <NameOfTaco />
        <TacoIngredients />
        <TacoFreeform />
      </div>
    )
  }
}

export default TacoView;