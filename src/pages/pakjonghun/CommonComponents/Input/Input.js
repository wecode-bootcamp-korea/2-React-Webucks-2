import './Input.scss';
import React from 'react';

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
