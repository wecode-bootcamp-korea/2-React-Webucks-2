import React from 'react';
import TopNav from '../TopNav/TopNav';
import './Detail.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

class Detail extends React.Component {
  render() {
    return (
      <div className="Detail">
        <TopNav></TopNav>
        <nav className="secondNav">
          <div className="title">
            <span className="titleCoffee">콜드 브루</span>
            <span className="titleMenu">
              홈 {'>'} MENU {'>'} 음료 {'>'} 에스프레소 {'>'} 화이트 초콜릿 모카
            </span>
          </div>
        </nav>
        <section className="detailMain">
          <article className="detail">
            <img
              src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000487]_20210430112319174.jpg"
              alt="바닐라 크림 콜드 브루"
            />
            <div className="detailInfo">
              <div className="detailInfoTitle">
                <div className="detailInfoTitleName">
                  <h1>바닐라 크림 콜드 브루</h1>
                  <span>Vanilla Cream Cold Brew</span>
                </div>
                <FontAwesomeIcon icon={faHeart} />
              </div>
              <div className="detailInfoDescription">
                <span>
                  콜드 브루에 더해진 바닐라 크림으로 깔끔하면서 달콤한 콜드
                  브루를 새롭게 즐길 수 있는 음료입니다.
                </span>
              </div>
              <div className="detailInfoNutrition">
                <span>제품 영양 정보</span>
                <span>Tall(톨) / 355ml (12 fl oz)</span>
              </div>
              <div className="detailInfoNutritionDetails">
                <div>
                  <div>
                    <span>1회 제공량 (kcal)</span>
                    <span>125</span>
                  </div>
                  <div>
                    <span>포화지방 (g)</span>
                    <span>6</span>
                  </div>
                  <div>
                    <span>단백질 (g)</span>
                    <span>3</span>
                  </div>
                </div>
                <div>
                  <div>
                    <span>나트륨 (mg)</span>
                    <span>58</span>
                  </div>
                  <div>
                    <span>당류 (g)</span>
                    <span>11</span>
                  </div>
                  <div>
                    <span>카페인 (mg)</span>
                    <span>150</span>
                  </div>
                </div>
              </div>
              <div className="detailInfoAlergy">
                <span>알레르기 유발 요인 : 우유</span>
              </div>
              <div className="detailInfoReview">
                <div className="detailInfoReviewTitle">
                  <span>리뷰</span>
                </div>
                <div className="detailInfoReviewComment">
                  <div>
                    <span>coffee_lover</span>
                    <span>너무 맛있어요!</span>
                  </div>
                  <div>
                    <span>CHOCO7</span>
                    <span>오늘도 바닐라 크림 콜드 브루를 마시러 갑니다.</span>
                  </div>
                  <div>
                    <span>legend_dev</span>
                    <span>진짜 바닐라 크림 콜드 브루는 전설이다.</span>
                  </div>
                  <ul id="reviewList"></ul>
                  <form id="reviewForm">
                    <input type="text" placeholder="리뷰를 입력해주세요." />
                  </form>
                </div>
              </div>
            </div>
          </article>
        </section>
        <footer className="detailFooter">
          <div>
            <h6>COMPANY</h6>
            <ul>
              <li>한눈에 보기</li>
              <li>위벅스 사명</li>
              <li>위벅스 소개</li>
              <li>국내 뉴스룸</li>
              <li>세계의 위벅스</li>
              <li>글로블 뉴스룸</li>
            </ul>
          </div>
          <div>
            <h6>CORPORATE SALES</h6>
            <ul>
              <li>단체 및 기업 구매 안내</li>
            </ul>
          </div>
          <div>
            <h6>PARTNERSHIP</h6>
            <ul>
              <li>신규 입점 제의</li>
              <li>협력 고객사 등록 신청</li>
            </ul>
          </div>
          <div>
            <h6>ONLINE COMMUNITY</h6>
            <ul>
              <li>페이스북</li>
              <li>트위터</li>
              <li>유튜브</li>
              <li>블로그</li>
              <li>인스타그램</li>
            </ul>
          </div>
          <div>
            <h6>RECRUIT</h6>
            <ul>
              <li>채용 소개</li>
              <li>채용 지원하기</li>
            </ul>
          </div>
          <div>
            <h6>WEBUCKS</h6>
          </div>
        </footer>

        <script src="js/detail.js"></script>
        <script
          src="https://kit.fontawesome.com/e3186f2480.js"
          crossorigin="anonymous"
        ></script>
      </div>
    );
  }
}

export default Detail;
