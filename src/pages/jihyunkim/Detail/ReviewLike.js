import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

class ReviewLike extends React.Component {
  render() {
    const { checkReviewLike, isLiked, id } = this.props;
    return (
      <FontAwesomeIcon
        onClick={() => checkReviewLike(id)}
        icon={faThumbsUp}
        className={isLiked ? 'like' : 'remove'}
      />
    );
  }
}

export default ReviewLike;
