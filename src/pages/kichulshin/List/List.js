import React from 'react';
import './List.scss';
import CoffeeCard from '../coffeeCard/CoffeeCard';
import TopNav from '../Nav/TopNav';

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
              {this.state.firstProducts.map(coldbrew => {
                return (
                  <CoffeeCard
                    key={coldbrew.id}
                    src={coldbrew.img}
                    alt={coldbrew.name}
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
          </section>
        </main>
      </div>
    );
  }
}

export default List;
