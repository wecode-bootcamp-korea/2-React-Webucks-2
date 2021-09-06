import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HeartIcon from '../Heart/HeartIcon';

class CoffeeCard extends Component {
  render() {
    console.log(this.props);
    return (
      <article className="menu">
        <Link
          className="abc"
          to={{
            pathname: '/detail-jisue',
            state: {
              imgURL: this.props.value.img,
              coffeeName: this.props.value.name,
            },
          }}
        >
          <img
            alt={this.props.value.name}
            className="menuImg"
            src={this.props.value.img}
          />
        </Link>
        <div id="heartSide">
          <p>{this.props.value.name}</p>
          <HeartIcon></HeartIcon>
        </div>
      </article>
    );
  }
}
export default CoffeeCard;
