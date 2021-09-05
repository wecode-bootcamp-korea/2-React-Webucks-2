import React from 'react';

class CoffeeCard extends React.Component {
  render() {
    return (
      <li className="CoffeeCard">
        <div className="hoverImg">
          <img alt={this.props.name} src={this.props.img} />
        </div>
        <span>{this.props.name}</span>
      </li>
    );
  }
}

export default CoffeeCard;
