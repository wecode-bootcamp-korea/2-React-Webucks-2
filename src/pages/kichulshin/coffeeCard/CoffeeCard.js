import React from 'react';
import { Link } from 'react-router-dom';
import './CoffeeCard.scss';

class CoffeeCard extends React.Component {
  render() {
    return (
      <li className="cardLi">
        <dt className="everyimg">
          <div className="mother">
            <Link to="/detail-kichul">
              <img
                key={this.props.key}
                src={this.props.src}
                alt={this.props.alt}
              />
            </Link>
          </div>
        </dt>
        <dd>{this.props.alt}</dd>
      </li>
    );
  }
}

export default CoffeeCard;
