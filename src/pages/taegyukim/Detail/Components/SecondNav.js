import React from 'react';
import './SecondNav.scss';

class SecondNav extends React.Component {
  render() {
    const { name, category } = this.props;

    return (
      <nav className="secondNav">
        <div className="secondNavTitle">
          <span className="secondNavTitleCoffee">{name}</span>
          <span className="secondNavTitleMenu">
            홈 {'>'} MENU {'>'} 음료 {'>'} {category} {'>'} {name}
          </span>
        </div>
      </nav>
    );
  }
}

export default SecondNav;
