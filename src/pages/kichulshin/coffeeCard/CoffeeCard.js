import React from 'react';
import './CoffeeCard.scss';

class CoffeeCard extends React.Component {
  render() {
    return (
      <li>
        <dt className="everyimg">
          <img key={this.props.key} src={this.props.src} alt={this.props.alt} />
        </dt>
        <dd>{this.props.alt}</dd>
      </li>
    );
  }
}

export default CoffeeCard;
