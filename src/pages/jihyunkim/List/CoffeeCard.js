import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';

class CoffeeCard extends React.Component {
  constructor() {
    super();
    this.state = {
      isLiked: false,
    };
  }

  checkLike = () => {
    const { isLiked } = this.state;
    this.setState({
      isLiked: !isLiked,
      icon: { fasHeart },
    });
  };

  render() {
    return (
      <li className="coffee">
        <div className="coffeeImage">
          <Link to="/detail-jihyun">
            <img src={this.props.src} alt={this.props.alt} />
          </Link>
        </div>
        <p>
          {this.props.alt}
          &nbsp;
          <FontAwesomeIcon
            onClick={this.checkLike}
            icon={this.state.isLiked ? fasHeart : farHeart}
            className={this.state.isLiked ? 'fas' : 'fa-heart'}
          />
        </p>
      </li>
    );
  }
}

export default CoffeeCard;
