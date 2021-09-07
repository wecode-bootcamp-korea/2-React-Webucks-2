import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import './HandleLike.scss';

class HandleLike extends React.Component {
  constructor() {
    super();
    this.state = {
      likeHeart: false,
    };
  }

  handleLike = event => {
    this.setState({
      likeHeart: !this.state.likeHeart,
    });
  };

  // eslint-disable-next-line react/require-render-return
  render() {
    return (
      <span id="heartIcon">
        <FontAwesomeIcon
          onClick={this.handleLike}
          icon={this.state.likeHeart ? solidHeart : regularHeart}
          className={this.state.likeHeart ? 'heart' : ''}
        />
      </span>
    );
  }
}

export default HandleLike;