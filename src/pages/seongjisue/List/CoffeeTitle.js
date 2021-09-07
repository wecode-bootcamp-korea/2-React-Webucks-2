import React, { Component } from 'react';
import CoffeeCard from './CoffeeCard ';

class CoffeeTitle extends Component {
  constructor() {
    super();
    this.state = {
      mainTitle: [],
      subTitle: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/listData.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          mainTitle: data['FISRT_DATA'],
          subTitle: data['SECOND_DATA'],
        });
      });
  }

  render() {
    const { mainTitle, subTitle } = this.state;
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
            {mainTitle.map(el => {
              const { id, name, img } = el;
              return <CoffeeCard value={{ id, name, img }} />;
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
            {subTitle.map(el => {
              const { id, name, img } = el;
              return <CoffeeCard value={{ id, name, img }} />;
            })}
          </main>
        </section>
      </div>
    );
  }
}
export default CoffeeTitle;
