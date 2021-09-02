import React from 'react';
import { Link } from 'react-router-dom';
import './nav.scss';

class Nav extends React.Component {
  render() {
    return (
      <nav className="Nav">
        <h1 className="navTitle">
          <Link to="/list-jonghun"> WeBucks</Link>
        </h1>
        <ul className="navItems">
          <li className="navItem">
            <Link to="/list-jonghun"> COFFEE</Link>
          </li>
          <li className="navItem">
            <Link to="/list-jonghun"> MENU</Link>
          </li>
          <li className="navItem">
            <Link to="/list-jonghun"> STORE</Link>
          </li>
          <li className="navItem">
            <Link to="/list-jonghun"> NEW</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
