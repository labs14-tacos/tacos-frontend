import React, { Component } from 'react';

import HeaderSection from './HeaderSection';
import Date from './Date';
import NameOfTaco from './NameOfTaco';

class TacoView extends Component {

  render() {
    return (
      <div>
        <HeaderSection />
        <Date />
        <NameOfTaco />
      </div>
    )
  }
}

export default TacoView;