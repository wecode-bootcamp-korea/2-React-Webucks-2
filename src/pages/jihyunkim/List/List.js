import React from 'react';
import TopNav from '../TopNav/TopNav';
import { FIRST_DATA } from '../List/listData';
import { SECOND_DATA } from '../List/listData';
import CoffeeCard from './CoffeeCard';
import './List.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

class List extends React.Component {
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
              {FIRST_DATA.map(coffeeData => {
                return (
                  <CoffeeCard
                    key={coffeeData.id}
                    src={coffeeData.img}
                    alt={coffeeData.name}
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
              {SECOND_DATA.map(coffeeData => {
                return (
                  <CoffeeCard
                    key={coffeeData.id}
                    src={coffeeData.img}
                    alt={coffeeData.name}
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
