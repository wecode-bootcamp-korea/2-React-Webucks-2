import React, { useState } from 'react';
import './Comment.scss';
import DummyComment from '../DummyComment/DummyComment';

function CommentChanger(content) {
  const [value, setDesc] = useState(content);

  function onChange(e) {
    setDesc(e.target.value);
  }

  return { value, onChange };
}

function HandleSubmit(desc) {
  const [comments, setComments] = useState([]);
  function onSubmit(e) {
    e.preventDefault();
    setComments([
      ...comments,
      { writer: '익명', desc, isGetHeart: false, id: comments.length },
    ]);
  }
  return { comments, onSubmit, setComments };
}

function Comment() {
  const attribute = CommentChanger('');
  const { comments, onSubmit, setComments } = HandleSubmit(attribute.value);

  return (
    <div className="Comment">
      {comments.map(({ writer, desc, isGetHeart, id }, index) => {
        return (
          <DummyComment
            writer={writer}
            desc={desc}
            key={index}
            index={id}
            comments={comments}
            setComments={setComments}
            isGetHeart={isGetHeart}
          />
        );
      })}
      <form onSubmit={onSubmit}>
        <input placeholder="댓글을 적읍시다" type="text" {...attribute} />
      </form>
    </div>
  );
}

export default Comment;
