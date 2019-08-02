import React, { Component } from 'react';

import DatePicker from './DatePicker';
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
        <div>
          <h1>Log A Taco:</h1>
          <button>Save</button>
        </div>
        <DatePicker
          style={style}
          width="302px"
          onDayClick={(e, day) => this.onDayClick(e, day)}
        />
        <div>
          <h2>Name:</h2>
          <input
            type='text'
            name='name'
          />
        </div>
        <TacoIngredients />
        <div>
          <h2>Do you wanna taco 'bout it?</h2>
          <input
            type='textarea'
            name='userExperience'
          />
        </div>
      </div>
    )
  }
}

export default TacoView;