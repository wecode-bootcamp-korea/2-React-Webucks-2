import React from 'react';
import './Input.scss';

function Input({ reff, ...rest }) {
  return (
    <div className="Input">
      <input {...rest} ref={reff} />
    </div>
  );
}

export default Input;
