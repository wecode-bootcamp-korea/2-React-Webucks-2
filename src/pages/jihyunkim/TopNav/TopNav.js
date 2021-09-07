import React from 'react';
import '../TopNav/TopNav.scss';

class TopNav extends React.Component {
  render() {
    return (
      <header className="nav">
        <span className="navLeft">Webucks</span>
        <span className="navRight">
          <span>COFFEE</span>
          <span>MENU</span>
          <span>STORE</span>
          <span>WHAT'S NEW</span>
        </span>
      </header>
    );
  }
}

export default TopNav;
