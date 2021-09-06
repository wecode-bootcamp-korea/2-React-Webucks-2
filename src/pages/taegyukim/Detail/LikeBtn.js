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
    this.setState({
      isLikeReview: !this.state.isLikeReview,
    });
  };

  render() {
    return (
      <button onClick={this.handleReviewBtnColor}>
        <FontAwesomeIcon
          icon={faThumbsUp}
          className={this.state.isLikeReview ? 'like' : 'remove'}
        />
      </button>
    );
  }
}

export default LikeBtn;
