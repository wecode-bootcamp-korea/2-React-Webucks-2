import React from 'react';
import { useHistory } from 'react-router';
import './Form.scss';

function Form({ children, isValid }) {
  const history = useHistory();

  return (
    <form
      className="Form"
      onSubmit={e => {
        {
          e.preventDefault();
          if (isValid) history.push('list-jonghun');
        }
      }}
    >
      {children}
    </form>
  );
}

export default Form;
