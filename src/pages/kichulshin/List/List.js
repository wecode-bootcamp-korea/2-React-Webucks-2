import React from 'react';
import './List.scss';
import CoffeeCard from '../coffeeCard/CoffeeCard';
import TopNav from '../Nav/TopNav';
import { FIRST_DATA, SECOND_DATA } from './listData';

class List extends React.Component {
  render() {
    return (
      <div className="list">
        <TopNav />
        <main>
          <section className="coldbrew">
            <dt className="introEach">
              <span className="eachTitle">콜드 브루 커피</span>
              <img
                src="https://image.istarbucks.co.kr/common/img/menu/logo_decaf.png"
                alt="decaf logo"
                class="decaf"
              />
              <span>디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)</span>
            </dt>
            <ul>
              {FIRST_DATA.map(firstCoffeePic => {
                return (
                  <CoffeeCard
                    key={firstCoffeePic.id}
                    src={firstCoffeePic.img}
                    alt={firstCoffeePic.name}
                  />
                );
              })}
            </ul>
          </section>
          <section className="brewed">
            <dt className="introEach">
              <span className="eachTitle">브루드 커피</span>
              <img
                src="https://image.istarbucks.co.kr/common/img/menu/logo_decaf.png"
                alt="decaf logo"
                className="decaf"
              />
              <span>디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)</span>
            </dt>
            <ul>
              {SECOND_DATA.map(secondCoffeePic => {
                return (
                  <CoffeeCard
                    key={secondCoffeePic.id}
                    src={secondCoffeePic.img}
                    alt={secondCoffeePic.name}
                  />
                );
              })}
            </ul>
          </section>
        </main>
      </div>
    );
  }
}

export default List;
