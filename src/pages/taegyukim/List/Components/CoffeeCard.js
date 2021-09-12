import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import './CoffeeCard.scss';

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
    const { name, img } = this.props;

    return (
      <div className="coffeeCard">
        <Link to="/detail-taegyu">
          <img alt={name} src={img} />
        </Link>
        <span>
          {name}
          <FontAwesomeIcon
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
