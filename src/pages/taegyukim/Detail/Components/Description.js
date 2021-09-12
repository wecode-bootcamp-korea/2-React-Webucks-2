import React from 'react';
import './Description.scss';

class Description extends React.Component {
  render() {
    const { summary } = this.props;

    return (
      <div className="detailInfoDescription">
        <span>{summary}</span>
      </div>
    );
  }
}

export default Description;
