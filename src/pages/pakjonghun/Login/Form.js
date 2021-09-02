import React from 'react';
import { withRouter } from 'react-router-dom';
import './Form.scss';

class Form extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form
        className="Form"
        onSubmit={e => {
          {
            e.preventDefault();
            if (this.props.isValid) this.props.history.push('list-jonghun');
          }
        }}
      >
        {this.props.children}
      </form>
    );
  }
}

export default withRouter(Form);
