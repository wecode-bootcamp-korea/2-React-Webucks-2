import React from 'react';
import './BorderLine.scss';

function BorderLine({ className }) {
  return (
    <div className="BorderLine">
      <div className={className}></div>
    </div>
  );
}

export default BorderLine;
