import React from 'react';
import { withRouter } from 'react-router-dom';
import './Form.scss';

class Form extends React.Component {
  render() {
    return (
      <form
        className="Form"
        onSubmit={e => {
          e.preventDefault();
          e.currentTarget.querySelector('input').blur();
          this.props.callBack();
        }}
      >
        {this.props.children}
      </form>
    );
  }
}

export default withRouter(Form);
