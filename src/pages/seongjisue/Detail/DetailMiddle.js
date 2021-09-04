import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { withRouter } from 'react-router';

class DetailMiddle extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      likeHeart: false,
      id: '',
      content: '',
      list: [],
    };
  }

  changeHeartColor = () => {
    this.setState({
      likeHeart: !this.state.likeHeart,
    });
  };

  reviewInputEnter = e => {
    const { abc, value } = e.target;
    this.setState({ [abc]: value });
  };

  onKeyUp = e => {
    if (e.keyCode === 13 && this.state.id !== '' && this.state.content !== '') {
      const { id, content, list } = this.state;
      this.setState({
        list: list.concat({ id: id, content: content }),
        id: '',
        content: '',
      });
      e.target.value = null;
    }
  };

  render() {
    return (
      <main id="main">
        <nav>
          <h1 id="titleMenu">콜드 브루</h1>
          <p id="titleRoot">
            홈{'>'}MENU{'>'}음료{'>'}에스프레소{'>'}
          </p>
        </nav>
        <section className="item">
          <img
            className="itemImg"
            alt="sigblue"
            src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/08/[9200000003661]_20210819094346176.jpg"
          />

          <aside className="itemContent">
            <header>
              <div className="itemNav">
                <span className="itemTitle">
                  <h3>바닐라 크림 콜드 브루</h3>
                  <p>Vanilla Cream Cold Brew</p>
                </span>
                <FontAwesomeIcon
                  className={
                    this.state.likeHeart ? 'mousePoint likeHeart' : 'mousePoint'
                  }
                  onClick={this.changeHeartColor}
                  icon={faHeart}
                />
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
              <div className="reveiwResults">
                {this.state.list.map((el, index) => {
                  return (
                    <p key={index}>
                      <span className="reveiwContent">{el.id}</span>
                      {el.content}
                    </p>
                  );
                })}
              </div>
              <div id="reveiwBox">
                <input
                  type="text"
                  placeholder="아이디를 입력해주세요"
                  name="id"
                  value={this.state.id}
                  onChange={this.reviewInputEnter}
                />
                <input
                  type="text"
                  placeholder="리뷰를 입력해주세요(엔터를 눌러주세요.)"
                  name="content"
                  value={this.state.content}
                  onChange={this.reviewInputEnter}
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
