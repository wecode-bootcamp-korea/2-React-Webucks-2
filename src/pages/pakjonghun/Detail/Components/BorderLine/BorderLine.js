import React from 'react';
import './BorderLine.scss';

class BorderLine extends React.Component {
  constructor({ className }) {
    super({ className });
    this.className = className;
  }

  render() {
    return (
      <div className="BorderLine">
        <div className={this.className}></div>
      </div>
    );
  }
}

export default BorderLine;
