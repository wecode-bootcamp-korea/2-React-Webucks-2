import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './CoffeeCategory.scss';

function CoffeeCategory({ title }) {
  return (
    <div className="CoffeeCategory">
      <header className="coffeeCategory">
        <span className="coffeeCategoryName">{title}</span>
        <span className="coffeeCategoryDesc">
          <FontAwesomeIcon icon={faCoffee} />
          <span className="coffeeCategorySubName">{title}</span>
        </span>
      </header>
    </div>
  );
}

export default CoffeeCategory;
