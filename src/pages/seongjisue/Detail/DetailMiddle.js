import React, { Component } from 'react';
import { withRouter } from 'react-router';
import HeartIcon from '../Heart/HeartIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRemoveFormat } from '@fortawesome/free-solid-svg-icons';

class DetailMiddle extends Component {
  constructor(props) {
    super(props);
    let listLocation = this.props.location.state;
    this.state = {
      name: '',
      content: '',
      list: [],
      menu:
        listLocation !== undefined
          ? listLocation.coffeeName
          : '시그니처 더 블랙 콜드 브루',
      img:
        listLocation !== undefined
          ? listLocation.imgURL
          : 'https://image.istarbucks.co.kr/upload/store/skuimg/2021/08/[9200000003661]_20210819094346176.jpg',
    };
  }

  onChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onKeyUp = e => {
    if (
      e.keyCode === 13 &&
      this.state.name !== '' &&
      this.state.content !== ''
    ) {
      const { name, content, list } = this.state;
      this.setState({
        list: list.concat({ name: name, content: content }),
        name: '',
        content: '',
      });
      e.target.value = null;
    }
  };

  reviewDelete = content => {
    const list = this.state.list.filter(el => el !== content);
    this.setState({ list });
  };

  render() {
    console.log(this.state.list);
    return (
      <main id="main">
        <nav>
          <h1 id="titleMenu">콜드 브루</h1>
          <p id="titleRoot" name="menu">
            홈{'>'}MENU{'>'}음료{'>'}에스프레소{'>'}
            {this.state.menu}
          </p>
        </nav>
        <section className="item">
          <img className="itemImg" alt={this.state.menu} src={this.state.img} />

          <aside className="itemContent">
            <header>
              <div className="itemNav">
                <span className="itemTitle">
                  <h3>{this.state.menu}</h3>
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

            <footer className="contentFooter">
              <h5>리뷰</h5>
              <div>
                {this.state.list.map((el, index) => {
                  return (
                    <div className="reveiwResults">
                      <span className="reveiwContent">{el.name}</span>
                      <p>{el.content}</p>
                      <FontAwesomeIcon
                        icon={faRemoveFormat}
                        className="reviewDelete"
                        onClick={() => {
                          this.reviewDelete(el);
                        }}
                      />
                      <HeartIcon className="reviewHeart"></HeartIcon>
                    </div>
                  );
                })}
              </div>
              <div id="reveiwBox">
                <input
                  type="text"
                  placeholder="아이디를 입력해주세요"
                  name="name"
                  value={this.state.name}
                  onChange={this.onChange}
                />
                <input
                  type="text"
                  placeholder="리뷰를 입력해주세요(엔터를 눌러주세요.)"
                  name="content"
                  value={this.state.content}
                  onChange={this.onChange}
                  onKeyUp={this.onKeyUp}
                />
              </div>
            </footer>
          </aside>
        </section>
      </main>
    );
  }
}
export default withRouter(DetailMiddle);
