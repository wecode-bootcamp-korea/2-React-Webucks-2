import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMugHot } from '@fortawesome/free-solid-svg-icons';
import TopNav from '../TopNav/TopNav';
import CoffeeCard from './CoffeeCard';
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
        <section className="listMain">
          <article className="coffee">
            <h1 className="description">
              <span className="coffeeName">콜드 브루 커피</span>
              <FontAwesomeIcon icon={faMugHot} />
              <span className="coffeeOption">
                디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)
              </span>
            </h1>
            <div className="img">
              <div className="imgRow">
                {firstProducts.map(product => {
                  return (
                    <CoffeeCard
                      key={product.id}
                      img={product.img}
                      name={product.name}
                    />
                  );
                })}
              </div>
            </div>
          </article>
          <article className="coffee">
            <h1 className="description">
              <span className="coffeeName">브루드 커피</span>
              <FontAwesomeIcon icon={faMugHot} />
              <span className="coffeeOption">
                디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)
              </span>
            </h1>
            <div className="img">
              <div className="imgRow">
                {secondProducts.map(product => {
                  return (
                    <CoffeeCard
                      key={product.id}
                      img={product.img}
                      name={product.name}
                    />
                  );
                })}
              </div>
            </div>
          </article>
        </section>
      </div>
    );
  }
}

export default List;
