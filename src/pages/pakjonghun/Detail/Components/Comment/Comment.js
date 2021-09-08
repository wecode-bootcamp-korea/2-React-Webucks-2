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
  }

  onSubmit = () => {
    const comment = {
      id: this.state.comments.length,
      writer: '익명',
      desc: this.state.desc,
      isLike: false,
    };

    this.setState({ comments: [...this.state.comments, comment], desc: '' });
  };

  onChange = e => {
    const {
      target: { value },
    } = e;
    this.setState(() => ({ desc: value }));
  };

  saveComment = comments => {
    this.setState({ comments });
  };

  deleteComment = id => {
    const restComments = this.state.comments.filter(item => item.id !== id);
    this.saveComment(restComments);
  };

  updateComment = id => {
    const updateComments = this.state.comments.map(item => {
      if (item.id === id) {
        item.isLike = !item.isLike;
      }
      return item;
    });
    this.saveComment(updateComments);
  };

  render() {
    const {
      updateComment,
      deleteComment,
      onSubmit,
      onChange,
      state: { comments, desc },
    } = this;

    return (
      <div className="Comment">
        {this.state.comments.map(({ writer, desc, isLike, id }) => {
          return (
            <DummyComment
              writer={writer}
              desc={desc}
              key={id}
              id={id}
              comments={comments}
              deleteComment={deleteComment}
            >
              <Heart isLike={isLike} updateById={updateComment} id={id} />
            </DummyComment>
          );
        })}
        <Form callBack={onSubmit}>
          <Input
            placeholder="댓글을 적읍시다"
            value={desc}
            onChange={onChange}
          />
        </Form>
      </div>
    );
  }
}

export default Comment;
