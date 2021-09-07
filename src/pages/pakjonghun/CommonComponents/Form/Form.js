import React from 'react';
import { withRouter } from 'react-router-dom';
import './Form.scss';

class Form extends React.Component {
  render() {
    const {
      props: { isValid, callBack, children },
    } = this;

    return (
      <form
        className="Form"
        onSubmit={e => {
          e.preventDefault();
          e.currentTarget.querySelector('input').blur();
          callBack(isValid);
        }}
      >
        {children}
      </form>
    );
  }
}

export default withRouter(Form);
