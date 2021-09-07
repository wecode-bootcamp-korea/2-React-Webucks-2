import CoffeeLayout from './Components/CoffeeListLayout/CoffeeListLayout';
import CoffeCard from './Components/CoffeeCard/CoffeCard';
import Nav from '../CommonComponents/Nav/Nav';
import React from 'react';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = { db1: [], db2: [] };
    this.setDb1 = this.setDb1.bind(this);
    this.setDb2 = this.setDb2.bind(this);
  }

  componentDidMount() {
    fetch('/data/data.json')
      .then(res => res.json())
      .then(data => {
        const db1 = data.data1.map(item => {
          item.isGetHeart = false;
          return item;
        });

        this.setState({ db1 });

        const db2 = data.data2.map(item => {
          item.isGetHeart = false;
          return item;
        });

        this.setState({ db2 });
      });
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
          {this.state.db1.map(({ img, name, isGetHeart, id }) => {
            return (
              <CoffeCard
                imgUrl={img}
                coffeeName={name}
                isGetHeart={isGetHeart}
                id={id}
                key={id}
                setDb={this.setDb1}
                db={this.state.db1}
              />
            );
          })}
        </CoffeeLayout>
        <CoffeeLayout>
          {this.state.db2.map(({ img, name, id, isGetHeart }) => {
            return (
              <CoffeCard
                imgUrl={img}
                coffeeName={name}
                isGetHeart={isGetHeart}
                id={id}
                key={id}
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
