import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './CoffeeCategory.scss';

class CoffeeCategory extends React.Component {
  constructor(props) {
    super(props);

    this.title = props.title;
  }

  render() {
    return (
      <div className="CoffeeCategory">
        <header className="coffeeCategory">
          <span className="coffeeCategoryName">{this.title}</span>
          <span className="coffeeCategoryDesc">
            <FontAwesomeIcon icon={faCoffee} />
            <span className="coffeeCategorySubName">{this.title}</span>
          </span>
        </header>
      </div>
    );
  }
}

export default CoffeeCategory;
