import React, { Component } from 'react';
import HeartIcon from '../Heart/HeartIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRemoveFormat } from '@fortawesome/free-solid-svg-icons';

class Review extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      content: '',
      list: [
        {
          id: 1,
          name: '위코드!',
          content: '리뷰를 입력해라!',
        },
      ],
    };
  }
  onChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onKeyUp = e => {
    if (e.keyCode === 13 && this.state.name && this.state.content) {
      const { name, content, list } = this.state;
      this.setState({
        list: list.concat({
          id: list.length ? list[list.length - 1].id + 1 : 1,
          name,
          content,
        }),
        name: '',
        content: '',
      });
    }
  };

  reviewDelete = content => {
    const list = this.state.list.filter(el => el.id !== content.id);
    this.setState({ list });
  };

  render() {
    return (
      <footer className="contentFooter">
        <h5>리뷰</h5>
        <div>
          {this.state.list.map(el => {
            return (
              <div className="reveiwResults" key={el.id}>
                <span className="reveiwContent">{el.name}</span>
                <p>{el.content}</p>
                <FontAwesomeIcon
                  icon={faRemoveFormat}
                  className="reviewDelete"
                  onClick={() => {
                    this.reviewDelete(el);
                  }}
                />
                <HeartIcon className="reviewHeart" />
              </div>
            );
          })}
        </div>
        <div id="reveiwBox">
          <input
            type="text"
            placeholder="아이디를 입력해주세요"
            name="name"
            value={this.state.name}
            onChange={this.onChange}
          />
          <input
            type="text"
            placeholder="리뷰를 입력해주세요(엔터를 눌러주세요.)"
            name="content"
            value={this.state.content}
            onChange={this.onChange}
            onKeyUp={this.onKeyUp}
          />
        </div>
      </footer>
    );
  }
}

export default Review;
