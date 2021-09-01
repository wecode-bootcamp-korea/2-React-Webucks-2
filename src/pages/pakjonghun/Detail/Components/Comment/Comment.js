import React, { useState } from 'react';
import './Comment.scss';
import DummyComment from '../DummyComment/DummyComment';
import Input from '../../../CommonComponents/Input/Input';

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
    setComments([...comments, { writer: '익명', desc }]);
  }
  return { comments, onSubmit, setComments };
}

function Comment() {
  const attribute = CommentChanger('');
  const { comments, onSubmit, setComments } = HandleSubmit(attribute.value);

  return (
    <div className="Comment">
      {comments.map(({ writer, desc }, index) => {
        return (
          <DummyComment
            writer={writer}
            desc={desc}
            key={index}
            index={index}
            comments={comments}
            setComments={setComments}
          />
        );
      })}
      <form onSubmit={onSubmit}>
        <Input placeholder="댓글을 적읍시다" type="text" {...attribute} />
      </form>
    </div>
  );
}

export default Comment;
