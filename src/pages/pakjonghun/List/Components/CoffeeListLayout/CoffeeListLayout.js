import React from 'react';
import './CoffeeListLayout.scss';
import CoffeeCategory from '../CoffeeCategory/CoffeeCategory';

class CoffeeListLayout extends React.Component {
  render() {
    return (
      <div className="CoffeeListLayout">
        <CoffeeCategory title="맛있는 커피 맛있게 먹자!" />
        <div className="coffeeLayout">{this.props.children}</div>
      </div>
    );
  }
}

export default CoffeeListLayout;
