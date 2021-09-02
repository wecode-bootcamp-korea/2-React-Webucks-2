import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CoffeeCard.scss';
import Heart from '../../../CommonComponents/Heart/Heart';
import Detail from '../../../Detail/Detail';

class CoffeCard extends React.Component {
  constructor(props) {
    super(props);
    this.imgUrl = this.props.imgUrl;
    this.coffeeName = this.props.coffeeName;
    this.isGetHeart = this.props.isGetHeart;
    this.id = this.props.id;
    this.setDb = this.props.setDb;
    this.db = this.props.db;
    console.log(this.id, this.coffeeName);
  }

  render() {
    return (
      <div className="CoffeeCard">
        <div className="imgContainer">
          <Link
            to={{
              pathname: `/detail-jonghun/${this.id}`,
              state: { db: this.db, id: this.id },
            }}
          >
            <img
              className="coffeeImg"
              alt={this.coffeeName}
              src={this.imgUrl}
            />
          </Link>
        </div>
        <div className="coffeeInfo">
          <Heart
            isGetHeart={this.isGetHeart}
            setDb={this.setDb}
            db={this.db}
            id={this.id}
          />
          <span className="coffeeName">{this.coffeeName}</span>
        </div>
      </div>
    );
  }
}

export default CoffeCard;
