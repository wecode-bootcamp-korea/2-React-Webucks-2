import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Heart.scss';

function Heart({ isGetHeart, setDb, id, db }) {
  return (
    <div className="Heart">
      <FontAwesomeIcon
        icon={faHeart}
        className={`heartIcon ${isGetHeart ? 'red' : null}`}
        onClick={() => {
          setDb(
            db.map(item => {
              console.log(item.isGetHeart);
              if (item.id === id) {
                item.isGetHeart = !isGetHeart;
              }
              console.log(item.isGetHeart);
              return item;
            })
          );
        }}
      />
    </div>
  );
}

export default Heart;
