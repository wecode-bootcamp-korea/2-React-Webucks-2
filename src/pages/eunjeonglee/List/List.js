import React from 'react';
import '../../../styles/reset.scss';
import '../../../styles/common.scss';
import TopNav from '../TopNav/TopNav';
import './List.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import CoffeeCard from '../CoffeeCard/CoffeeCard';
import { FIRST_DATA } from '../data/listData';
import { SECOND_DATA } from '../data/listData';

class List extends React.Component {
  render() {
    return (
      <body className="List">
        <TopNav />
        <p className="subtitle">
          <span className="coffeeTitle">콜드 브루 커피</span> &nbsp;{' '}
          <FontAwesomeIcon icon={faCoffee} />
          &nbsp;&nbsp; 디카페인 에스프레소 샷 추가 가능(일부 음료 제외)
        </p>

        <section className="coffee">
          <ul className="items">
            {FIRST_DATA.map(coffeeData => {
              return (
                <CoffeeCard
                  key={coffeeData.id}
                  name={coffeeData.name}
                  img={coffeeData.img}
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
            {SECOND_DATA.map(coffeeData => {
              return (
                <CoffeeCard
                  key={coffeeData.id}
                  name={coffeeData.name}
                  img={coffeeData.img}
                />
              );
            })}
          </ul>
        </section>
      </body>
    );
  }
}

export default List;
