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
    const { isValidHeart } = this.state;
    this.setState({
      isValidHeart: !isValidHeart,
    });
  };

  render() {
    const { isValidHeart } = this.state;
    const { handleHeartColor } = this;

    return (
      <div>
        <Link to="/detail-taegyu">
          <img
            key={this.props.key}
            alt={this.props.name}
            src={this.props.img}
          />
        </Link>
        <span>
          {this.props.name}
          <FontAwesomeIcon
            key={this.props.key}
            icon={faHeart}
            className={isValidHeart ? 'redHeart' : 'remove'}
            onClick={handleHeartColor}
          />
        </span>
      </div>
    );
  }
}

export default CoffeeCard;
