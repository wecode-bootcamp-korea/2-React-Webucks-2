import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';

class HandleLike extends React.Component {
  constructor() {
    super();
    this.state = {
      likeHeart: false,
    };
  }

  handleLike = event => {
    const { likeHeart } = this.state;
    this.setState({
      likeHeart: !likeHeart,
    });
  };

  render() {
    const { likeHeart } = this.state;
    return (
      <span id="heartIcon">
        <FontAwesomeIcon
          onClick={this.handleLike}
          icon={likeHeart ? solidHeart : regularHeart}
          className={likeHeart ? 'heart' : ''}
        />
      </span>
    );
  }
}

export default HandleLike;
