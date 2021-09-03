import React from 'react';
import './BorderLine.scss';

class BorderLine extends React.Component {
  render() {
    return (
      <div className="BorderLine">
        <div className={this.props.className}></div>
      </div>
    );
  }
}

export default BorderLine;
