import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import './Title.scss';

class Title extends React.Component {
  render() {
    const { isRedHeart, name, engName, handleHeartColor } = this.props;

    return (
      <div className="detailInfoTitle">
        <div className="detailInfoTitleName">
          <h1>{name}</h1>
          <span>{engName}</span>
        </div>
        <FontAwesomeIcon
          icon={faHeart}
          className={isRedHeart ? 'redHeart' : 'remove'}
          onClick={handleHeartColor}
        />
      </div>
    );
  }
}

export default Title;
