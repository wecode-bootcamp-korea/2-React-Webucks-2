import React, { Component } from 'react';
import CoffeeCard from './CoffeeCard ';

class CoffeeTitle extends Component {
  constructor() {
    super();
    this.state = {
      firstTitle: [],
      secondTitle: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/listData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          firstTitle: data['FISRT_DATA'],
          secondTitle: data['SECOND_DATA'],
        });
      });
  }

  render() {
    console.log(this.state.firstTitle);
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
            {this.state.firstTitle.map(el => {
              return (
                <CoffeeCard value={{ name: el.name, img: el.img }}></CoffeeCard>
              );
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
            {this.state.secondTitle.map(el => {
              return (
                <CoffeeCard value={{ name: el.name, img: el.img }}></CoffeeCard>
              );
            })}
          </main>
        </section>
      </div>
    );
  }
}
export default CoffeeTitle;
