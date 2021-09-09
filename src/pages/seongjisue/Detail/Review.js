import React, { Component } from 'react';
import HeartIcon from '../Heart/HeartIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRemoveFormat } from '@fortawesome/free-solid-svg-icons';

class Review extends Component {
  constructor() {
    super();
    this.state = {
      isLiked: false,
      name: '',
      comment: '',
      cmntList: [
        {
          id: 1,
          name: '위코드!',
          comment: '리뷰를 입력해라!',
        },
      ],
    };
  }

  clickLiked = () => {
    let { isLiked } = this.state;
    this.setState({
      isLiked: !isLiked,
    });
  };

  onChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onKeyUp = e => {
    if (e.keyCode === 13 && this.state.name && this.state.comment) {
      const { name, comment, cmntList } = this.state;
      this.setState({
        cmntList: [
          ...cmntList,
          {
            id: cmntList.length ? cmntList[cmntList.length - 1].id + 1 : 1,
            name,
            comment,
          },
        ],
        name: '',
        comment: '',
      });
    }
  };

  reviewDelete = id => {
    const cmntList = this.state.cmntList.filter(el => el.id !== id);
    this.setState({ cmntList });
  };

  render() {
    return (
      <footer className="contentFooter">
        <h5>리뷰</h5>
        <div>
          {this.state.cmntList.map(el => {
            const { id, name } = el;
            return (
              <div className="reveiwResults" key={id}>
                <span className="reveiwContent">{name}</span>
                <p>{el.comment}</p>
                <FontAwesomeIcon
                  icon={faRemoveFormat}
                  className="reviewDelete"
                  onClick={() => {
                    this.reviewDelete(id);
                  }}
                />
                <HeartIcon
                  className="reviewHeart"
                  isLiked={this.state.isLiked}
                  clickLiked={this.clickLiked}
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
            value={this.state.name}
            className="reviewId"
            onChange={this.onChange}
          />
          <input
            type="text"
            placeholder="리뷰를 입력해주세요(엔터를 눌러주세요.)"
            name="comment"
            value={this.state.comment}
            className="reviewPw"
            onChange={this.onChange}
            onKeyUp={this.onKeyUp}
          />
        </div>
      </footer>
    );
  }
}

export default Review;
