import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRemoveFormat } from '@fortawesome/free-solid-svg-icons';
import './DummyComment.scss';
import Heart from '../../../CommonComponents/Heart/Heart';

class DummyComment extends React.Component {
  deleteComment() {
    const temp = this.props.comments.filter(item => item.id !== this.props.id);
    this.props.setComments(temp);
  }

  render() {
    return (
      <div className="DummyComment">
        <span className="writer">{this.props.writer}</span>
        <span className="desc">{this.props.desc}</span>
        <FontAwesomeIcon
          icon={faRemoveFormat}
          className="remove"
          onClick={() => this.deleteComment()}
        />
        {this.props.children}
      </div>
    );
  }
}

export default DummyComment;
