import React from 'react';
import './CoffeeListLayout.scss';
import CoffeeCategory from '../CoffeeCategory/CoffeeCategory';

function CoffeeListLayout({ children }) {
  return (
    <div className="CoffeeListLayout">
      <CoffeeCategory title="맛있는 커피 맛있게 먹자!" />
      <div className="coffeeLayout">{children}</div>
    </div>
  );
}

export default CoffeeListLayout;
