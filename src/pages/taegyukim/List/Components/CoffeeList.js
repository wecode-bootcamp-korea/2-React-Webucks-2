import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMugHot } from '@fortawesome/free-solid-svg-icons';
import CoffeeCard from './CoffeeCard';
import './CoffeeList.scss';

class CoffeeList extends React.Component {
  render() {
    const { products } = this.props;

    return (
      <article className="coffee">
        <h1 className="description">
          <span className="coffeeName">{products[0]?.category}</span>
          <FontAwesomeIcon icon={faMugHot} />
          <span className="coffeeOption">
            디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)
          </span>
        </h1>
        <div className="img">
          <div className="imgRow">
            {products.map(product => {
              return (
                <CoffeeCard
                  key={product.id}
                  name={product.name}
                  img={product.img}
                />
              );
            })}
          </div>
        </div>
      </article>
    );
  }
}
export default CoffeeList;
