import React, { Component } from 'react';
import CoffeeCard from './CoffeeCard ';

class CoffeeTitle extends Component {
  render() {
    return (
      <div>
        {this.props.value.map(data => {
          return (
            <section>
              <header className="navbar navbarSub">
                <h3 className="navbarSubMenu">{data.title}</h3>
                <img
                  alt="컵 아이콘"
                  className="navbarSubMenu navbarImg"
                  src="https://image.istarbucks.co.kr/common/img/menu/logo_decaf.png"
                />
                <p className="navbarSubMenu">
                  디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)
                </p>
              </header>
              <CoffeeCard value={data.coffeeData}></CoffeeCard>
            </section>
          );
        })}
      </div>
    );
  }
}
export default CoffeeTitle;
