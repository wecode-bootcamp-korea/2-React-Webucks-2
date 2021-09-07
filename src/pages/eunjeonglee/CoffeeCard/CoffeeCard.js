import React from 'react';
import HandleLike from '../HandleLike/HandleLike';
import './CoffeeCard.scss';

class CoffeeCard extends React.Component {
  render() {
    return (
      <li className="CoffeeCard">
        <div className="hoverImg">
          <div className="heartIcon">
            <HandleLike />
          </div>
          <img alt={this.props.name} src={this.props.img} />
        </div>
        <span>{this.props.name}</span>
      </li>
    );
  }
}

export default CoffeeCard;
