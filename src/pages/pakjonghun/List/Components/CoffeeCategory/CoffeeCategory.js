import React from 'react';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './CoffeeCategory.scss';

class CoffeeCategory extends React.Component {
  render() {
    return (
      <div className="CoffeeCategory">
        <header className="coffeeCategory">
          <span className="coffeeCategoryName">{this.props.title}</span>
          <span className="coffeeCategoryDesc">
            <FontAwesomeIcon icon={faCoffee} />
            <span className="coffeeCategorySubName">{this.props.title}</span>
          </span>
        </header>
      </div>
    );
  }
}

export default CoffeeCategory;
