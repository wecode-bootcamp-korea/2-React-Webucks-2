import React from 'react';
import './Photo.scss';

class Photo extends React.Component {
  render() {
    return (
      <div className="Photo">
        <img
          className={this.props.className}
          alt={this.props.coffeeName}
          src={this.props.imgUrl}
        />
      </div>
    );
  }
}

export default Photo;
