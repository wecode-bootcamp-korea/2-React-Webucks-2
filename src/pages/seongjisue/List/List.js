import './List.scss';
import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import CoffeeCard from './CoffeeCard ';

class List extends Component {
  render() {
    return (
      <div className="List">
        <Nav></Nav>

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
            <CoffeeCard></CoffeeCard>
          </main>
        </section>

        <section>
          <header className="navbar navbarSub">
            <h3 className="navbarSubMenu">브루드 커피</h3>
            <img
              alt="brodcoffe"
              className="navbarSubMenu navbarImg"
              src="https://image.istarbucks.co.kr/common/img/menu/logo_decaf.png"
            />
            <p className="navbarSubMenu">
              디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)
            </p>
          </header>
          <main className="menuList">
            <article className="menu">
              <a href="www.naver.com" className="overflower menuImg">
                <img
                  alt="icecoffee"
                  className="menuImg"
                  src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[106509]_20210430111852870.jpg"
                />
              </a>
              <p>아이스 커피</p>
            </article>
            <article className="menu">
              <a href="www.naver.com" className="overflower menuImg">
                <img
                  alt="todaycoffe"
                  className="menuImg"
                  src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[2]_20210430111934117.jpg"
                />
              </a>
              <p>오늘의 커피</p>
            </article>
          </main>
        </section>
      </div>
    );
  }
}

export default List;
