import React from 'react';
import DummyComment from '../DummyComment/DummyComment';
import Form from '../../../CommonComponents/Form/Form';
import Heart from '../../../CommonComponents/Heart/Heart';
import Input from '../../../CommonComponents/Input/Input';
import './Comment.scss';

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

  onSubmit() {
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
      desc: '',
    }));
  }

  onChange(e) {
    const {
      target: { value },
    } = e;
    this.setState(() => ({ desc: value }));
  }

  setComments(comments) {
    this.setState({ comments });
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
            >
              <Heart
                isGetHeart={isGetHeart}
                setDb={this.setComments}
                id={id}
                db={this.state.comments}
              />
            </DummyComment>
          );
        })}
        <Form callBack={this.onSubmit}>
          <Input
            placeholder="댓글을 적읍시다"
            value={this.state.desc}
            onChange={this.onChange}
          />
        </Form>
      </div>
    );
  }
}

export default Comment;
