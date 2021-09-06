import React from 'react';
import './Input.scss';

class Input extends React.Component {
  render() {
    return (
      <div className="Input">
        <input {...this.props} />
      </div>
    );
  }
}

export default Input;
