import React from 'react';
import ReactDOM from 'react-dom';
import LoggedInHome from '../components/LoggedInHome';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LoggedInHome />, div);
});
