import React from 'react';
import TopNav from '../TopNav/TopNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import CoffeeCard from '../CoffeeCard/CoffeeCard';
import './List.scss';

class List extends React.Component {
  constructor() {
    super();
    this.state = {
      firstProducts: [],
      secondProducts: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/listData.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          firstProducts: data.FIRST_DATA,
          secondProducts: data.SECOND_DATA,
        });
      });
  }

  render() {
    const { firstProducts, secondProducts } = this.state;
    return (
      <div className="List">
        <TopNav />
        <p className="subtitle">
          <span className="coffeeTitle">콜드 브루 커피</span> &nbsp;{' '}
          <FontAwesomeIcon icon={faCoffee} />
          &nbsp;&nbsp; 디카페인 에스프레소 샷 추가 가능(일부 음료 제외)
        </p>

        <section className="coffee">
          <ul className="items">
            {firstProducts.map(product => {
              return (
                <CoffeeCard
                  key={product.id}
                  img={product.img}
                  name={product.name}
                />
              );
            })}
          </ul>
        </section>

        <p className="subtitle">
          <span className="coffeeTitle">브루드 커피 &nbsp;&nbsp;</span>
          <FontAwesomeIcon icon={faCoffee} />
          &nbsp;&nbsp;디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)
        </p>

        <section className="coffee">
          <ul className="items" id="brewedItmes">
            {secondProducts.map(product => {
              return (
                <CoffeeCard
                  key={product.id}
                  img={product.img}
                  name={product.name}
                />
              );
            })}
          </ul>
        </section>
      </div>
    );
  }
}

export default List;
