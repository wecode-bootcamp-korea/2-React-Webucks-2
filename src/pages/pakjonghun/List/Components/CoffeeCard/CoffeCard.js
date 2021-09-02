import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CoffeeCard.scss';
import Heart from '../../../CommonComponents/Heart/Heart';
import Detail from '../../../Detail/Detail';

function CoffeCard({ imgUrl, coffeeName, isGetHeart, id, setDb, db }) {
  return (
    <div className="CoffeeCard">
      <div className="imgContainer">
        <Link
          to={{
            pathname: `/detail-jonghun/${id}`,
            state: { db, id },
          }}
        >
          <img className="coffeeImg" alt={coffeeName} src={imgUrl} />
        </Link>
      </div>
      <div className="coffeeInfo">
        <Heart isGetHeart={isGetHeart} setDb={setDb} db={db} id={id} />
        <span className="coffeeName">{coffeeName}</span>
      </div>
    </div>
  );
}

export default CoffeCard;
