import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CoffeeCard extends Component {
  render() {
    return (
      <main className="menuList">
        {this.props.value.map(data => {
          return (
            <article className="menu">
              <Link to="/detail-jisue">
                <img alt={data.text} className="menuImg" src={data.img} />
              </Link>
              <p>{data.text}</p>
            </article>
          );
        })}
      </main>
    );
  }
}
export default CoffeeCard;
