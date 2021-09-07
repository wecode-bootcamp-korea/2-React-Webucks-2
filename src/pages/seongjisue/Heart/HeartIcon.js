import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import './Heart.scss';

class HeartIcon extends Component {
  constructor() {
    super();
    this.state = {
      likeHeart: false,
    };
  }

  onClick = () => {
    this.setState({
      likeHeart: !this.state.likeHeart,
    });
  };

  render() {
    return (
      <div id="heartIcon">
        <FontAwesomeIcon
          className={
            this.state.likeHeart ? 'mousePoint likeHeart' : 'mousePoint'
          }
          onClick={this.onClick}
          icon={faHeart}
        />
      </div>
    );
  }
}
export default HeartIcon;
