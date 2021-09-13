import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import CoffeeTitle from './CoffeeTitle';
import './List.scss';

class List extends Component {
  constructor() {
    super();
    this.state = {
      coldData: [],
      brewData: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/listData.json')
      .then(res => res.json())
      .then(data => {
        const coldData = data['LIST_MENU'].filter(el => el.id < 200);
        const brewData = data['LIST_MENU'].filter(el => el.id > 200);
        this.setState({
          coldData,
          brewData,
        });
      });
  }

  render() {
    const { coldData, brewData } = this.state;
    return (
      <div className="List">
        <Nav />
        <CoffeeTitle coldData={coldData} brewData={brewData} />
      </div>
    );
  }
}

export default List;
