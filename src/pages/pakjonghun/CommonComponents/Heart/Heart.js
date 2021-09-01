import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKissWinkHeart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Heart.scss';

function Heart({ isGetHeart }) {
  return (
    <div className="Heart">
      {isGetHeart ? (
        <FontAwesomeIcon
          icon={faKissWinkHeart}
          className="red"
          onClick={onClick}
        />
      ) : (
        <FontAwesomeIcon icon={faKissWinkHeart} onClick={onClick} />
      )}
    </div>
  );
}

function onClick(e) {
  e.target.classList.toggle('red');
}

export default Heart;
