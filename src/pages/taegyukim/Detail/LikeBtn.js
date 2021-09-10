import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

class LikeBtn extends React.Component {
  render() {
    const { id, isLiked, handleReviewBtnColor } = this.props;
    return (
      <button onClick={() => handleReviewBtnColor(id)}>
        <FontAwesomeIcon
          icon={faThumbsUp}
          className={isLiked ? 'like' : 'remove'}
        />
      </button>
    );
  }
}

export default LikeBtn;
