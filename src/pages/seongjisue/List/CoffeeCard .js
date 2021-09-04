import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CoffeeCard extends Component {
  render() {
    return (
      <main className="menuList">
        {this.props.value.map(data => {
          return (
            <article className="menu">
              <Link
                className="abc"
                to={{
                  pathname: '/detail-jisue',
                  state: { imgURL: data.img, coffeeName: data.name },
                }}
              >
                <img alt={data.name} className="menuImg" src={data.img} />
              </Link>
              <p>{data.name}</p>
            </article>
          );
        })}
      </main>
    );
  }
}
export default CoffeeCard;
