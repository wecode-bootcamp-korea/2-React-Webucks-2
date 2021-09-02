import React from 'react';
import './Input.scss';

function Input({ isValid, rref, set, value, ...rest }) {
  return (
    <div className="Input">
      <input
        className={isValid ? 'green' : null}
        value={value}
        ref={rref}
        {...rest}
        onChange={e => {
          set(e.target.value);
        }}
      />
    </div>
  );
}

export default Input;
