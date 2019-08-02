import React, { Component } from 'react';

class TacoFreeform extends Component {
  render() {
    return (
      <div>
        <h2>Do you wanna taco 'bout it?</h2>
        <input 
          type='textarea'
          name='userExperience'
        />
      </div>
    )
  }
}

export default TacoFreeform;