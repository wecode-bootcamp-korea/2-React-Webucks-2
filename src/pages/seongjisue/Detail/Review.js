import React, { Component } from 'react';
import HeartIcon from '../Heart/HeartIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRemoveFormat } from '@fortawesome/free-solid-svg-icons';

class Review extends Component {
  render() {
    const {
      clickRewLiked,
      name,
      comment,
      cmntList,
      onChangeRew,
      onKeyUpRew,
      deleteRew,
    } = this.props;
    return (
      <footer className="contentFooter">
        <h5>리뷰</h5>
        <div>
          {cmntList.map(el => {
            const { id, name, comment } = el;
            return (
              <div className="reveiwResults" key={id}>
                <span className="reveiwContent">{name}</span>
                <p>{comment}</p>
                <FontAwesomeIcon
                  icon={faRemoveFormat}
                  className="reviewDelete"
                  onClick={() => {
                    deleteRew(id);
                  }}
                />
                <HeartIcon
                  className="reviewHeart"
                  isLiked={el.isLiked}
                  clickLiked={clickRewLiked} //하트 중복좋아요 아이디로 접근해서 하기
                />
              </div>
            );
          })}
        </div>
        <div id="reviewBox">
          <input
            type="text"
            placeholder="아이디를 입력해주세요"
            name="name"
            value={name}
            className="reviewId"
            onChange={onChangeRew}
          />
          <input
            type="text"
            placeholder="리뷰를 입력해주세요(엔터를 눌러주세요.)"
            name="comment"
            value={comment}
            className="reviewPw"
            onChange={onChangeRew}
            onKeyUp={onKeyUpRew}
          />
        </div>
      </footer>
    );
  }
}

export default Review;
