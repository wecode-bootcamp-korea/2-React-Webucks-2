import React from 'react';

class CoffeeCard extends React.Component {
  render() {
    return (
      <li className="cold-brew-1">
        <div className="coldBrewImage">
          <img key={this.props.key} src={this.props.src} alt={this.props.alt} />
        </div>
        <p>{this.props.alt}</p>
      </li>
    );
  }
}

export default CoffeeCard;
