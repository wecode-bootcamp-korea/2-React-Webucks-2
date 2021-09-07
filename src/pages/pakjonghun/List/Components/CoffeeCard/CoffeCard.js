import React from 'react';
import Heart from '../../../CommonComponents/Heart/Heart';
import { Link } from 'react-router-dom';
import './CoffeeCard.scss';

class CoffeCard extends React.Component {
  render() {
    return (
      <div className="CoffeeCard">
        <div className="imgContainer">
          <Link
            to={{
              pathname: `/detail-jonghun/${this.props.id}`,
              state: {
                data: {
                  img: this.props.imgUrl,
                  coffeeName: this.props.coffeeName,
                  isGetHeart: this.props.isGetHeart,
                  id: this.props.id,
                },
              },
            }}
          >
            <img
              className="coffeeImg"
              alt={this.props.coffeeName}
              src={this.props.imgUrl}
            />
          </Link>
        </div>
        <div className="coffeeInfo">
          <Heart
            isGetHeart={this.props.isGetHeart}
            setDb={this.props.setDb}
            db={this.props.db}
            id={this.props.id}
          />
          <span className="coffeeName">{this.props.coffeeName}</span>
        </div>
      </div>
    );
  }
}

export default CoffeCard;
