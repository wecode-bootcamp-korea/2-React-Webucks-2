import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRemoveFormat } from '@fortawesome/free-solid-svg-icons';
import './DummyComment.scss';

class DummyComment extends React.Component {
  render() {
    const {
      props: { writer, desc, deleteComment, id },
    } = this;

    return (
      <div className="DummyComment">
        <span className="writer">{writer}</span>
        <span className="desc">{desc}</span>
        <FontAwesomeIcon
          icon={faRemoveFormat}
          className="remove"
          onClick={() => deleteComment(id)}
        />
        {this.props.children}
      </div>
    );
  }
}

export default DummyComment;
