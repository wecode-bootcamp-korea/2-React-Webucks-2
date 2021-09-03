import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './DummyComment.scss';
import { faRemoveFormat } from '@fortawesome/free-solid-svg-icons';
import Heart from '../../../CommonComponents/Heart/Heart';

class DummyComment extends React.Component {
  deleteComment() {
    const temp = this.props.comments.filter((item, idx) => {
      return idx !== this.index;
    });

    this.props.setComments(temp);
  }

  setHeart() {
    const item = this.props.comments.filter(item => item.id !== this.props.id);
    this.props.setComments(item);
  }

  render() {
    return (
      <div className="DummyComment">
        <span className="writer">{this.props.writer}</span>
        <span className="desc">{this.props.desc}</span>
        <FontAwesomeIcon
          icon={faRemoveFormat}
          className="remove"
          onClick={() => this.setHeart()}
        />
        <Heart
          isGetHeart={this.props.isGetHeart}
          setDb={() => this.deleteComment()}
          id={this.props.id}
          db={this.props.comments}
        />
      </div>
    );
  }
}

export default DummyComment;
