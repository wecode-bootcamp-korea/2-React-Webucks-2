import React from 'react';
import TopNav from '../TopNav/TopNav';
import CoffeeCard from './CoffeeCard';
import './List.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

class List extends React.Component {
  constructor() {
    super();
    this.state = {
      firstProducts: [],
      secondProducts: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/listData.json', {
      method: 'GET',
    })
      .then(res => res.json())

      .then(data => {
        this.setState({
          firstProducts: data.FIRST_DATA,
          secondProducts: data.SECOND_DATA,
        });
      });
  }

  render() {
    return (
      <div className="List">
        <div className="content">
          <TopNav />
          <div className="coldBrew">
            <div className="coldBrewMenu">
              <span>콜드 브루 커피 </span>
              <FontAwesomeIcon icon={faCoffee} />
              <span> 디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)</span>
            </div>
            <ul className="coldBrewList">
              {this.state.firstProducts.map(product => {
                return (
                  <CoffeeCard
                    key={product.id}
                    src={product.img}
                    alt={product.name}
                  />
                );
              })}
            </ul>
          </div>
          <div className="brewedCoffee">
            <div className="brewedCoffeeMenu">
              <span>브루드 커피 </span>
              <FontAwesomeIcon icon={faCoffee} />
              <span> 디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)</span>
            </div>
            <ul className="brewedCoffeeList">
              {this.state.secondProducts.map(product => {
                return (
                  <CoffeeCard
                    key={product.id}
                    src={product.img}
                    alt={product.name}
                  />
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default List;
