import React from 'react';
import './TopNav.scss';

class TopNav extends React.Component {
  render() {
    return (
      <nav className="nav">
        <span className="navLogo">WeBucks</span>
        <ul className="navSideMenu">
          <li>COFFEE</li>
          <li>MENU</li>
          <li>STORE</li>
          <li>WHAT'S NEW</li>
        </ul>
      </nav>
    );
  }
}

export default TopNav;
