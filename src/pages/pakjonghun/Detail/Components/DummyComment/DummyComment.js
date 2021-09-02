import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './DummyComment.scss';
import { faRemoveFormat } from '@fortawesome/free-solid-svg-icons';
import Heart from '../../../CommonComponents/Heart/Heart';

class DummyComment extends React.Component {
  constructor(props) {
    super(props);
    this.writer = props.writer;
    this.desc = props.desc;
    this.index = props.index;
    this.comments = props.comments;
    this.isGetHeart = props.isGetHeart;
    this.setComments = props.setComments;

    this.deleteComment = this.deleteComment.bind(this);
    this.setHeart = this.setHeart.bind(this);
    this.state = { isGetHeart: '', comments: this.comments };
  }

  componentDidMount() {
    this.setState({ isGetHeart: this.isGetHeart });
  }

  deleteComment() {
    const temp = this.comments.filter((item, idx) => {
      return idx !== this.index;
    });
    this.setComments(temp);
  }

  setHeart(data) {
    this.setState({ isGetHeart: data[this.index].isGetHeart });
  }

  render() {
    return (
      <div className="DummyComment">
        <span className="writer">{this.writer}</span>
        <span className="desc">{this.desc}</span>
        <FontAwesomeIcon
          icon={faRemoveFormat}
          className="remove"
          onClick={() => this.deleteComment()}
        />
        <Heart
          isGetHeart={this.state.isGetHeart}
          setDb={this.setHeart}
          id={this.index}
          db={this.comments}
        />
      </div>
    );
  }
}

export default DummyComment;
