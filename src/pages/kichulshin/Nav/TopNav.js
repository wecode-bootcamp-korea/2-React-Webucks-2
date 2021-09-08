import React from 'react';
import '../Nav/TopNav.scss';

class TopNav extends React.Component {
  render() {
    return (
      <header className="category">
        <p id="logo">WeBucks</p>
        <a href="#" className="categoryOption">
          COFFEE
        </a>
        <a href="#" className="categoryOption">
          MENU
        </a>
        <a href="#" className="categoryOption">
          STORE
        </a>
        <a href="#" className="categoryOption">
          WHAT'S NEW
        </a>
      </header>
    );
  }
}
export default TopNav;
