import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HeartIcon from '../Heart/HeartIcon';

class CoffeeCard extends Component {
  constructor() {
    super();
    this.state = {
      isLiked: false,
    };
  }

  clickLiked = () => {
    let { isLiked } = this.state;
    this.setState({
      isLiked: !isLiked,
    });
  };

  render() {
    let { id, imgUrl, name } = this.props.data;
    return (
      <article className="menu">
        <Link
          className="menuLink"
          to={{
            pathname: `/detail-jisue`,
            state: {
              id,
            },
          }}
        >
          <img alt={name} className="menuImg" src={imgUrl} />
        </Link>
        <div id="heartSide">
          <p>{name}</p>
          <HeartIcon
            isLiked={this.state.isLiked}
            clickLiked={this.clickLiked} //중복하트
          />
        </div>
      </article>
    );
  }
}
export default CoffeeCard;
