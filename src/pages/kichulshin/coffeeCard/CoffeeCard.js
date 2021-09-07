import React from 'react';
import './CoffeeCard.scss';

class CoffeeCard extends React.Component {
  render() {
    return (
      <li className="cardLi">
        <dt className="everyimg">
          <div className="mother">
            <img
              key={this.props.key}
              src={this.props.src}
              alt={this.props.alt}
            />
          </div>
        </dt>
        <dd>{this.props.alt}</dd>
      </li>
    );
  }
}

export default CoffeeCard;
