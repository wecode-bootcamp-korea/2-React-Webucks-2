import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

class LikeBtn extends React.Component {
  constructor() {
    super();
    this.state = {
      isLikeReview: false,
    };
  }

  handleReviewBtnColor = () => {
    const { isLikeReview } = this.state;
    this.setState({
      isLikeReview: !isLikeReview,
    });
  };

  render() {
    const { handleReviewBtnColor } = this;
    const { isLikeReview } = this.state;
    return (
      <button onClick={handleReviewBtnColor}>
        <FontAwesomeIcon
          icon={faThumbsUp}
          className={isLikeReview ? 'like' : 'remove'}
        />
      </button>
    );
  }
}

export default LikeBtn;
