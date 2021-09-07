import React from 'react';
import './Photo.scss';

class Photo extends React.Component {
  render() {
    const {
      props: { className, img, name },
    } = this;
    return (
      <div className="Photo">
        <img className={className} alt={name} src={img} />
      </div>
    );
  }
}

export default Photo;
