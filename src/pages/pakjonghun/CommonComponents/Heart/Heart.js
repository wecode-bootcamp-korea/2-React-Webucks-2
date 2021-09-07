import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Heart.scss';

class Heart extends React.Component {
  render() {
    const {
      props: { id, isLike, updateById, layoutName },
    } = this;
    return (
      <div className={'Heart'}>
        <FontAwesomeIcon
          icon={faHeart}
          className={`heartIcon ${isLike ? 'red' : null}`}
          onClick={() => updateById(id, layoutName)}
        />
      </div>
    );
  }
}

export default Heart;
