import React from 'react';
import { Link } from 'react-router-dom';
import './CoffeeCard.scss';

class CoffeeCard extends React.Component {
  render() {
    return (
      <li className="coffeeCard">
        <dt className="everyimg">
          <Link to="/detail-kichul">
            <img
              key={this.props.id}
              src={this.props.src}
              alt={this.props.alt}
            />
          </Link>
        </dt>
        <dd>{this.props.alt}</dd>
      </li>
    );
  }
}

export default CoffeeCard;
