import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './DummyComment.scss';
import { faRemoveFormat } from '@fortawesome/free-solid-svg-icons';
import Heart from '../../../CommonComponents/Heart/Heart';

class DummyComment extends React.Component {
  constructor(props) {
    // { writer, desc, index, comments, setComments, isGetHeart }
    super(props);
    this.writer = props.writer;
    this.desc = props.desc;
    this.index = props.index;
    this.comments = props.comments;
    this.setComments = props.setComments;
    this.isGetHeart = props.isGetHeart;

    console.log(this.);
  }

  componentDidMount() {
    const temp = this.comments.filter((item, idx) => idx !== this.index);
    this.setComments(temp);
  }

  render() {
    return (
      <div className="DummyComment">
        <span className="writer">{this.writer}</span>
        <span className="desc">{this.desc}</span>
        <FontAwesomeIcon
          icon={faRemoveFormat}
          className="remove"
          onClick={() =>
            deleteComment(this.index, this.comments, this.setComments)
          }
        />
        <Heart
          isGetHeart={this.isGetHeart}
          setDb={this.setComments}
          id={this.index}
          db={this.comments}
        />
      </div>
    );
  }
}

function deleteComment(index, comments, setComments) {}

export default DummyComment;
