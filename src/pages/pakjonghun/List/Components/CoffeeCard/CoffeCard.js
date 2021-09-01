import React from 'react';
import { Link } from 'react-router-dom';
import './CoffeeCard.scss';
import Heart from '../../../CommonComponents/Heart/Heart';

function CoffeCard({ imgUrl, coffeeName, isGetHeart = false, index }) {
  return (
    <div className="CoffeeCard">
      <div className="imgContainer">
        <Link
          to={{
            pathname: `/detail-jonghun/${index}`,
            state: { imgUrl, coffeeName, isGetHeart },
          }}
        >
          <img className="coffeeImg" alt={coffeeName} src={imgUrl} />
        </Link>
      </div>
      <div className="coffeeInfo">
        <Heart isGetHeart={isGetHeart} />
        <span className="coffeeName">{coffeeName}</span>
      </div>
    </div>
  );
}

export default CoffeCard;
