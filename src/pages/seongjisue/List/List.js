import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import CoffeeTitle from './CoffeeTitle';
import './List.scss';

class List extends Component {
  render() {
    return (
      <div className="List">
        <Nav />
        <CoffeeTitle />
      </div>
    );
  }
}

export default List;
