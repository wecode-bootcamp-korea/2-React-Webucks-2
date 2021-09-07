import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HeartIcon from '../Heart/HeartIcon';

class CoffeeCard extends Component {
  render() {
    let value = this.props.value;
    return (
      <article className="menu">
        <Link
          className="abc"
          to={{
            pathname: `/detail-jisue`,
            state: {
              id: value.id,
              img: value.img,
              name: value.name,
            },
          }}
        >
          <img alt={value.name} className="menuImg" src={value.img} />
        </Link>
        <div id="heartSide">
          <p>{value.name}</p>
          <HeartIcon></HeartIcon>
        </div>
      </article>
    );
  }
}
export default CoffeeCard;
