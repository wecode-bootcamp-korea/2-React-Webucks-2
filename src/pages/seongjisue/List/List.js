import './List.scss';
import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import CoffeeTitle from './CoffeeTitle';
import { COFFEE_LIST_TITLE as coffeeListTitle } from './data/listData';

class List extends Component {
  render() {
    return (
      <div className="List">
        <Nav></Nav>
        <CoffeeTitle value={coffeeListTitle}></CoffeeTitle>
      </div>
    );
  }
}

export default List;
