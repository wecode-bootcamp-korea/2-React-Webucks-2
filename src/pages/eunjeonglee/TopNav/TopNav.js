import React, { Component } from 'react';
import './TopNav.scss';

class TopNav extends Component {
  render() {
    return (
      <body className="TopNav">
        <nav>
          <h1 className="title">Webucks</h1>
          <ul>
            <li>COFFEE</li>
            <li>MENU</li>
            <li>STORE</li>
            <li>WHAT'S NEW</li>
          </ul>
        </nav>
      </body>
    );
  }
}

export default TopNav;
