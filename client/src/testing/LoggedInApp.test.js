import React from 'react';
import ReactDOM from 'react-dom';
import LoggedInApp from '../components/LoggedInApp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LoggedInApp />, div);
});
