import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import './styles/reset.scss';
import './styles/common.scss';
import CoffeeContextContainer from './Context';

ReactDOM.render(
  <CoffeeContextContainer>
    <Routes />
  </CoffeeContextContainer>,

  document.getElementById('root')
);
