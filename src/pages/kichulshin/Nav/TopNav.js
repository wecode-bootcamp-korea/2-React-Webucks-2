import React from 'react';
import '../Nav/TopNav.scss';
class TopNav extends React.Component {
  render() {
    return (
      <header className="category">
        <p id="logo">WeBucks</p>
        <a href="#" className="cate">
          COFFEE
        </a>
        <a href="#" className="cate">
          MENU
        </a>
        <a href="#" className="cate">
          STORE
        </a>
        <a href="#" className="cate">
          WHAT'S NEW
        </a>
      </header>
    );
  }
}
export default TopNav;
