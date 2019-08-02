import React, { Component } from 'react';

import HeaderSection from './HeaderSection';
import DatePicker from './DatePicker'
import NameOfTaco from './NameOfTaco';
import TacoIngredients from './TacoIngredients';

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
        <HeaderSection />
        <DatePicker 
          style={style} 
          width="302px" 
          onDayClick={(e, day)=> this.onDayClick(e, day)}/> 
        <NameOfTaco />
        <TacoIngredients />
      </div>
    )
  }
}

export default TacoView;