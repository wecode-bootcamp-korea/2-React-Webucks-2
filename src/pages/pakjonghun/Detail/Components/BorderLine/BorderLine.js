import React from 'react';
import './BorderLine.scss';

class BorderLine extends React.Component {
  constructor(props) {
    super(props);
    this.className = props.className;
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
