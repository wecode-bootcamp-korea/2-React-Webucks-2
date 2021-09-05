import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

class CoffeeCard extends React.Component {
  constructor() {
    super();
    this.state = {
      isValidHeart: false,
    };
  }

  handleHeartColor = () => {
    this.setState({
      isValidHeart: !this.state.isValidHeart,
    });
  };

  render() {
    return (
      <div>
        <Link to="/detail-taegyu">
          <img
            key={this.props.key}
            src={this.props.img}
            alt={this.props.name}
          />
        </Link>
        <span>
          {this.props.name}
          <FontAwesomeIcon
            icon={faHeart}
            className={this.state.isValidHeart ? 'redHeart' : 'remove'}
            onClick={this.handleHeartColor}
          />
        </span>
      </div>
    );
  }
}

export default CoffeeCard;
