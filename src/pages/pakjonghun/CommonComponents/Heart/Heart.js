import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Heart.scss';

class Heart extends React.Component {
  render() {
    return (
      <div className="Heart">
        <FontAwesomeIcon
          icon={faHeart}
          className={`heartIcon ${this.props.isGetHeart ? 'red' : null}`}
          onClick={() => {
            this.props.setDb(
              this.props.db.map(item => {
                if (item.id === this.props.id) {
                  item.isGetHeart = !this.props.isGetHeart;
                }
                return item;
              })
            );
          }}
        />
      </div>
    );
  }
}

export default Heart;
