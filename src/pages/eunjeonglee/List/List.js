import React from 'react';
import '../../../styles/reset.scss';
import '../../../styles/common.scss';
import TopNav from '../TopNav/TopNav';
import './List.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import CoffeeCard from '../CoffeeCard/CoffeeCard';

class List extends React.Component {
  constructor() {
    super();
    this.state = {
      products1: [],
      products2: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/listData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          products1: data.FIRST_DATA,
          products2: data.SECOND_DATA,
        });
      });
  }

  render() {
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
            {this.state.products1.map(product => {
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
            {this.state.products2.map(product => {
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
