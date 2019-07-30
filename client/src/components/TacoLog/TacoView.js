import React, { Component } from 'react';

import HeaderSection from './HeaderSection';
import Date from './Date';
import NameOfTaco from './NameOfTaco';
import TacoIngredients from './TacoIngredients';

class TacoView extends Component {

  render() {
    return (
      <div>
        <HeaderSection />
        <Date />
        <NameOfTaco />
        <TacoIngredients />
      </div>
    )
  }
}

export default TacoView;