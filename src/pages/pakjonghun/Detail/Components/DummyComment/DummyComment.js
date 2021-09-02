import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './DummyComment.scss';
import { faRemoveFormat } from '@fortawesome/free-solid-svg-icons';
import Heart from '../../../CommonComponents/Heart/Heart';

function DummyComment({
  writer,
  desc,
  index,
  comments,
  setComments,
  isGetHeart,
}) {
  return (
    <div className="DummyComment">
      <span className="writer">{writer}</span>
      <span className="desc">{desc}</span>
      <FontAwesomeIcon
        icon={faRemoveFormat}
        className="remove"
        onClick={() => deleteComment(index, comments, setComments)}
      />
      <Heart
        isGetHeart={isGetHeart}
        setDb={setComments}
        id={index}
        db={comments}
      />
    </div>
  );
}

function deleteComment(index, comments, setComments) {
  const temp = comments.filter((item, idx) => idx !== index);
  setComments(temp);
}

export default DummyComment;
