import React, { Component } from 'react';
import { withRouter } from 'react-router';
import HeartIcon from '../Heart/HeartIcon';
import Review from './Review';

class DetailMiddle extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.location.state);
    let listLocation = this.props.location.state;
    this.state = {
      name:
        listLocation !== undefined
          ? listLocation.name
          : '시그니처 더 블랙 콜드 브루',
      img:
        listLocation !== undefined
          ? listLocation.img
          : 'https://image.istarbucks.co.kr/upload/store/skuimg/2021/08/[9200000003661]_20210819094346176.jpg',
    };
  }

  render() {
    return (
      <main id="main">
        <nav className="title">
          <h1 id="titleMenu">콜드 브루</h1>
          <p id="titleRoot" name="menu">
            홈{'>'}MENU{'>'}음료{'>'}에스프레소{'>'}
            {this.state.name}
          </p>
        </nav>
        <section className="item">
          <img className="itemImg" alt={this.state.name} src={this.state.img} />

          <aside className="itemContent">
            <header>
              <div className="itemNav">
                <span className="itemTitle">
                  <h3>{this.state.name}</h3>
                  <p>Vanilla Cream Cold Brew</p>
                </span>
                <HeartIcon></HeartIcon>
              </div>
              <p id="contentFontSize">
                콜드 브루에 더해진 바닐라 크림으로 깔끔하면서 달콤한 콜드 브루를
                새롭게 즐길 수 있는 음료입니다.
              </p>
            </header>

            <main>
              <header className="tableHeader">
                <p>제품 영양 정보</p>
                <p>Tall(톨) / 355ml (12 fl oz)</p>
              </header>
              <main className="flex">
                <div className="list">
                  <ul className="listStyle">
                    <li>1회 제공량 (kcal)</li>
                    <li>포화지방 (g)</li>
                    <li>단백질 (g)</li>
                  </ul>
                  <ul className="listStyle">
                    <li>125</li>
                    <li>6</li>
                    <li>3</li>
                  </ul>
                </div>
                <div className="list">
                  <ul className="listStyle">
                    <li>나트륨 (mg)</li>
                    <li>당류 (g)</li>
                    <li>카페인 (mg)</li>
                  </ul>
                  <ul className="listStyle">
                    <li>58</li>
                    <li>11</li>
                    <li>150</li>
                  </ul>
                </div>
              </main>
              <footer className="tableFooter">
                <p>알레르기 유발요인 : 우유</p>
              </footer>
            </main>
            <Review></Review>
          </aside>
        </section>
      </main>
    );
  }
}
export default withRouter(DetailMiddle);
