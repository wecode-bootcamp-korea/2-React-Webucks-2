import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Data from './Data';

class CoffeeCard extends Component {
  render() {
    return (
      <div className="List">
        <main className="menuList">
          {Data.map(data => {
            return (
              <article className="menu">
                <Link to="/detail-jisue" className="overflower menuImg">
                  <img alt={data.text} className="menuImg" src={data.img} />
                </Link>
                <p>{data.text}</p>
              </article>
            );
          })}
        </main>
      </div>
    );
  }
}
export default CoffeeCard;
