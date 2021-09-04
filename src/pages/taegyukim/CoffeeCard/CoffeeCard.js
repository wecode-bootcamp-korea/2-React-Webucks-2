import React from 'react';
import { Link } from 'react-router-dom';

class CoffeeCard extends React.Component {
  render() {
    return (
      <div>
        <Link to="/detail-taegyu">
          <img
            key={this.props.key}
            src={this.props.img}
            alt={this.props.name}
          />
        </Link>
        <span>{this.props.name}</span>
      </div>
    );
  }
}

export default CoffeeCard;
