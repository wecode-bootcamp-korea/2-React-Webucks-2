import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';

class CoffeeCard extends React.Component {
  constructor() {
    super();
    this.state = {
      isRed: false,
    };
  }

  checkLike = () => {
    this.setState({
      isRed: !this.state.isRed,
      icon: { fasHeart },
    });
  };

  render() {
    return (
      <li className="coffee">
        <div className="coffeeImage">
          <Link to="/detail-jihyun">
            <img
              key={this.props.key}
              src={this.props.src}
              alt={this.props.alt}
            />
          </Link>
        </div>
        <p>
          {this.props.alt}
          &nbsp;
          <FontAwesomeIcon
            onClick={this.checkLike}
            icon={this.state.isRed ? fasHeart : farHeart}
            className={this.state.isRed ? 'fas' : 'fa-heart'}
          />
        </p>
      </li>
    );
  }
}

export default CoffeeCard;
