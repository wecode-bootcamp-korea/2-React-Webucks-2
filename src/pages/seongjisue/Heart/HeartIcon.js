import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import './Heart.scss';

class HeartIcon extends Component {
  constructor() {
    super();
    this.state = {
      isLiked: false,
    };
  }

  onClick = () => {
    let { isLiked } = this.state;
    this.setState({
      isLiked: !isLiked,
    });
  };

  render() {
    const { isLiked } = this.state;
    return (
      <div id="heartIcon">
        <FontAwesomeIcon
          className={isLiked ? 'mousePoint isLiked' : 'mousePoint'}
          onClick={this.onClick}
          icon={faHeart}
        />
      </div>
    );
  }
}
export default HeartIcon;
