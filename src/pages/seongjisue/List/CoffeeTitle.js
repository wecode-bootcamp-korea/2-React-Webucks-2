import React, { Component } from 'react';
import CoffeeCard from './CoffeeCard ';

class CoffeeTitle extends Component {
  render() {
    const { coldData, brewData } = this.props;
    return (
      <div>
        <section>
          <header className="navbar navbarSub">
            <h3 className="navbarSubMenu">콜드 브루 커피</h3>
            <img
              alt="컵 아이콘"
              className="navbarSubMenu navbarImg"
              src="https://image.istarbucks.co.kr/common/img/menu/logo_decaf.png"
            />
            <p className="navbarSubMenu">
              디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)
            </p>
          </header>
          <main className="menuList">
            {coldData.map(el => {
              return <CoffeeCard data={{ ...el }} key={el.id} />;
            })}
          </main>
        </section>

        <section>
          <header className="navbar navbarSub">
            <h3 className="navbarSubMenu">브루드 커피</h3>
            <img
              alt="컵 아이콘"
              className="navbarSubMenu navbarImg"
              src="https://image.istarbucks.co.kr/common/img/menu/logo_decaf.png"
            />
            <p className="navbarSubMenu">
              디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)
            </p>
          </header>
          <main className="menuList">
            {brewData.map(el => {
              return <CoffeeCard data={{ ...el }} key={el.id} />;
            })}
          </main>
        </section>
      </div>
    );
  }
}
export default CoffeeTitle;