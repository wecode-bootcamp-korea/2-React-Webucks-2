import React from 'react';
import './Comment.scss';
import DummyComment from '../DummyComment/DummyComment';

class Comment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
      desc: '',
    };
    this.setComments = this.setComments.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState(() => ({
      comments: [
        ...this.state.comments,
        {
          writer: '익명',
          desc: this.state.desc,
          isGetHeart: false,
          id: this.state.comments.length,
        },
      ],
    }));
  }

  onChange(e) {
    this.setState(() => ({ desc: e.target.value }));
  }

  setComments(comments) {
    this.setState(() => ({ comments }));
  }

  render() {
    return (
      <div className="Comment">
        {this.state.comments.map(({ writer, desc, isGetHeart, id }) => {
          return (
            <DummyComment
              writer={writer}
              desc={desc}
              key={id}
              id={id}
              comments={this.state.comments}
              setComments={this.setComments}
              isGetHeart={isGetHeart}
            />
          );
        })}
        <form onSubmit={this.onSubmit}>
          <input
            placeholder="댓글을 적읍시다"
            type="text"
            onChange={this.onChange}
          />
        </form>
      </div>
    );
  }
}

export default Comment;
