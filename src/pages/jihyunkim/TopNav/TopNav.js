import React from 'react';
import '../TopNav/TopNav.scss';

class TopNav extends React.Component {
  render() {
    return (
      <div className="nav">
        <span className="navLeft">Webucks</span>
        <span className="navRight">
          <span>COFFEE</span>
          <span>MENU</span>
          <span>STORE</span>
          <span>WHAT'S NEW</span>
        </span>
      </div>
    );
  }
}

export default TopNav;
