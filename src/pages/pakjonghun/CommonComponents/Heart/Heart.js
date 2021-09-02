import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Heart.scss';

class Heart extends React.Component {
  constructor(props) {
    super(props);

    this.isGetHeart = props.isGetHeart;
    this.setDb = props.setDb;
    this.id = props.id;
    this.db = props.db;
    this.state = { isGetHeart: '' };

    this.state = { isGetHeart: '' };
  }

  setHeart() {
    this.setState({ isGetHeart: !this.state.isGetHeart });
  }

  componentDidMount() {
    this.setState({ isGetHeart: this.isGetHeart });
  }

  render() {
    return (
      <div className="Heart">
        <FontAwesomeIcon
          icon={faHeart}
          className={`heartIcon ${this.state.isGetHeart ? 'red' : null}`}
          onClick={() => {
            this.setHeart();
            this.setDb(
              this.db.map(item => {
                if (item.id === this.id) {
                  item.isGetHeart = !this.isGetHeart;
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
