import React from 'react';
import '../Nav/Nav.scss';

class Nav extends React.Component {
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

export default Nav;
