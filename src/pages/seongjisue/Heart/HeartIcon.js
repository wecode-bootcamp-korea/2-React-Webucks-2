import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import './Heart.scss';

class HeartIcon extends Component {
  render() {
    const { isLiked, clickLiked } = this.props;
    return (
      <div id="heartIcon">
        <FontAwesomeIcon
          className={isLiked ? 'mousePoint isLiked' : 'mousePoint'}
          onClick={clickLiked}
          icon={faHeart}
        />
      </div>
    );
  }
}
export default HeartIcon;
