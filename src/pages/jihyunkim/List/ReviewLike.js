import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

class ReviewLike extends React.Component {
  constructor() {
    super();
    this.state = {
      isLike: false,
    };
  }

  checkLike = () => {
    this.setState({
      isLike: !this.state.isLike,
    });
  };

  render() {
    return (
      <FontAwesomeIcon
        onClick={this.checkLike}
        icon={faThumbsUp}
        className={this.state.isLike ? 'like' : 'remove'}
      />
    );
  }
}

export default ReviewLike;
