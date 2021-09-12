import React from 'react';
import LikeBtn from './LikeBtn';
import './Review.scss';

class Review extends React.Component {
  render() {
    const {
      reviewArray,
      deleteReviewComment,
      handleReviewInput,
      addReviewComment,
      handleReviewBtnColor,
    } = this.props;

    return (
      <div className="review">
        <div className="reviewTitle">
          <span>리뷰</span>
        </div>
        <div className="reviewComment">
          <div>
            <span>coffee_lover</span>
            <span>너무 맛있어요!</span>
          </div>
          <div>
            <span>CHOCO7</span>
            <span>오늘도 돌체 콜드 브루를 마시러 갑니다.</span>
          </div>
          <div>
            <span>legend_dev</span>
            <span>진짜 돌체 콜드 브루는 전설이다.</span>
          </div>
          <ul id="reviewList">
            {reviewArray.map(review => {
              return (
                <li key={review.id}>
                  {review.comment}
                  <button onClick={() => deleteReviewComment(review.id)}>
                    ❌
                  </button>
                  <LikeBtn
                    id={review.id}
                    isLiked={review.isLiked}
                    handleReviewBtnColor={handleReviewBtnColor}
                  />
                </li>
              );
            })}
          </ul>
          <form id="reviewForm">
            <input
              onChange={handleReviewInput}
              onKeyPress={addReviewComment}
              type="text"
              placeholder="리뷰를 입력해주세요."
            />
          </form>
        </div>
      </div>
    );
  }
}

export default Review;
