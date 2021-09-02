import React, { useEffect, useState } from 'react';
import CoffeeLayout from './Components/CoffeeListLayout/CoffeeListLayout';
import CoffeCard from './Components/CoffeeCard/CoffeCard';
import { data1, data2 } from '../data';
import Nav from '../CommonComponents/Nav/Nav';

class List extends React.Component {
  constructor(props) {
    super(props);

    this.state = { db1: [], db2: [] };
    this.setDb1 = this.setDb1.bind(this);
    this.setDb2 = this.setDb2.bind(this);
  }

  componentDidMount() {
    const newData1 = data1.map((item, id) => {
      item.isGetHeart = false;
      return item;
    });

    const newData2 = data2.map((item, id) => {
      item.isGetHeart = false;
      return item;
    });

    this.setState({ db1: newData1, db2: newData2 });
  }

  setDb1(data) {
    this.setState({ db1: data });
  }

  setDb2(data) {
    this.setState({ db2: data });
  }

  render() {
    return (
      <div className="List">
        <Nav />
        <CoffeeLayout>
          {this.state.db1.map(({ img, title, isGetHeart, id }, index) => {
            return (
              <CoffeCard
                imgUrl={img}
                coffeeName={title}
                isGetHeart={isGetHeart}
                id={index}
                key={index}
                setDb={this.setDb1}
                db={this.state.db1}
              />
            );
          })}
        </CoffeeLayout>
        <CoffeeLayout>
          {this.state.db2.map(({ img, title, id, isGetHeart }, index) => {
            return (
              <CoffeCard
                imgUrl={img}
                coffeeName={title}
                isGetHeart={isGetHeart}
                index={index}
                key={index}
                setDb={this.setDb2}
                db={this.state.db2}
              />
            );
          })}
        </CoffeeLayout>
      </div>
    );
  }
}

export default List;
