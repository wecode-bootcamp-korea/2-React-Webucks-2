import './Detail.scss';
import React, { Component } from 'react';
//import { faHeart } from '@fortawesome/free-regular-svg-icons';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Nav from '../Nav/Nav';

class Detail extends Component {
  render() {
    return (
      <div className="Detail">
        <div id="total">
          <div id="sub">
            <Nav></Nav>

            <main id="main">
              <nav>
                <h1 id="titleMenu">콜드 브루</h1>
                <p id="titleRoot">
                  홈{'>'}MENU{'>'}음료{'>'}에스프레소{'>'}화이트 초콜릿 모카
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
                      {/* <FontAwesomeIcon icon={faHeart} size="2x" spin /> */}
                    </div>
                    <p id="contentFontSize">
                      콜드 브루에 더해진 바닐라 크림으로 깔끔하면서 달콤한 콜드
                      브루를 새롭게 즐길 수 있는 음료입니다.
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
                      <p>
                        <span className="reveiwContent">coffee_lover</span> 너무
                        맛있어요!
                      </p>
                      <p>
                        <span className="reveiwContent">CHOCO7</span> 나는
                        화이트 초콜릿 모카를 마시러 갈랑다
                      </p>
                      <p>
                        <span className="reveiwContent">legend_dev</span> 진짜
                        콜드브루는 여기가 전설!
                      </p>
                    </div>
                    <div id="reveiwBox">
                      <input type="text" placeholder="아이디를 입력해주세요" />
                      <input
                        type="text"
                        placeholder="리뷰를 입력해주세요(엔터를 눌러주세요.)"
                      />
                    </div>
                  </footer>
                </aside>
              </section>
            </main>
          </div>

          <footer id="footer">
            <div className="footerList">
              <ul className="footerMenu">
                <li id="footerTitle">COMPANY</li>
                <li>한눈에 보기</li>
                <li>스타벅스 사명</li>
                <li>스타벅스 소개</li>
                <li>국내 뉴스룸</li>
                <li>세계 스타벅스</li>
                <li>글로벌 뉴스룸</li>
              </ul>
              <ul className="footerMenu">
                <li id="footerTitle">CORPORATE SALES</li>
                <li>단체 및 기업 구매 안내</li>
              </ul>
              <ul className="footerMenu">
                <li id="footerTitle">PARTNERSHIP</li>
                <li>신규 입점 제의</li>
                <li>협력 고객사 등록신청</li>
              </ul>
              <ul className="footerMenu">
                <li id="footerTitle">ONLINE COMMUNITY</li>
                <li>페이스북</li>
                <li>트위터</li>
                <li>유튜브</li>
                <li>인스타크램</li>
              </ul>
              <ul className="footerMenu">
                <li id="footerTitle">RECRUIT</li>
                <li>채용 소개</li>
                <li>채용 지원하기</li>
              </ul>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default Detail;
