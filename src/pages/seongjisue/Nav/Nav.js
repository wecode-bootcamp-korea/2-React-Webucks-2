import React, { Component } from 'react';
import './Nav.scss';

class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        <header className="navbar">
          <div className="navbarFlex">
            <h1>JiBucks</h1>
            <img
              alt="커피아이콘"
              className="navbarImg"
              src="https://post-phinf.pstatic.net/MjAxNzA1MjZfMjUg/MDAxNDk1NzgyMDEyNDEz.zV3fZYrO1bq8wUElB_9Om95PwzAYHFxR0L_alQjrNxIg.nbpFI_-ESGVBrom8k4LhD4rFDSJpGzjvnY9I1oyumsIg.PNG/Starbucks-Logo.png?type=w1200"
            />
          </div>
          <ul className="navbarFlex" id="navbarMenu">
            <li>COFFEE</li>
            <li>MENU</li>
            <li>STORE</li>
            <li>WHAT'S NEW</li>
          </ul>
        </header>
      </div>
    );
  }
}

export default Nav;
