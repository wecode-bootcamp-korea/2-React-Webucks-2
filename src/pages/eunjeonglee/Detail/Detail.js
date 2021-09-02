import React from 'react';
import '../../../styles/reset.scss';
import '../../../styles/common.scss';
import TopNav from '../TopNav/TopNav';
import './Detail.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

class Detail extends React.Component {
  render() {
    return (
      <body className="Detail">
        <TopNav />
        <main id="wrap">
          <h2 className="title">콜드 브루</h2>
          <p id="menuBar">
            홈 {'>'} MENU {'>'} 사이트 비노출 메뉴(사이렌오더 영양정보 연동){' '}
            {'>'} 돌체 콜드 브루
          </p>

          <img
            id="productImg"
            alt="돌체 콜드 브루"
            src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000002081]_20210415133656839.jpg"
          />

          <section className="container">
            <h3 id="productName">
              돌체 콜드 브루{' '}
              <span id="heartIcon">
                <FontAwesomeIcon icon={faHeart} />
              </span>
              <br />
              <span>Dolce Cold Brew</span>
            </h3>

            <p id="productDct">
              무더운 여름철,
              <br />
              동남아 휴가지에서 즐기는 커피를 떠오르게 하는
              <br />
              스타벅스 음료의 베스트 x 베스트 조합인
              <br /> 돌체 콜드 브루를 만나보세요!
            </p>
            <div id="productInfoTitle">
              <p>제품 영양 정보</p>
              <p>Tall(톨) / 355ml (12 fl oz)</p>
            </div>
            <div className="nutriWrap">
              <ul className="nutri first">
                <li className="nutriInfo">1회 제공량 (kcal)</li>
                <li className="nutriInfo">265</li>
                <li className="nutriInfo">포화지방 (g)</li>
                <li className="nutriInfo">9</li>
                <li className="nutriInfo">단백질 (g)</li>
                <li className="nutriInfo">8</li>
              </ul>
              <ul className="nutri second">
                <li className="nutriInfo">나트륨 (mg)</li>
                <li className="nutriInfo">115</li>
                <li className="nutriInfo">당류 (g)</li>
                <li className="nutriInfo">29</li>
                <li className="nutriInfo">카페인 (mg)</li>
                <li className="nutriInfo">8</li>
              </ul>
            </div>

            <h4>알레르기 유발요인 : 우유</h4>
            <div className="review">
              <h3>리뷰</h3>
              <p>
                <span>coffee_lover</span> 너무 맛있어요!
              </p>
              <p>
                <span>CHOCO7</span> 오늘도 화이트 초콜릿 모카를 마시러 갑니다.
              </p>
              <p>
                <span>legend_dev</span> 진짜 화이트 초콜릿 모카는 전설이다. 진짜
                화이트 초콜릿 모카는 전설이다. 화이트 초...
              </p>
              <input type="text" placeholder="리뷰를 입력해주세요" />
            </div>
          </section>
        </main>

        <footer>
          <section className="footer">
            <ul>
              <li className="footerManu">COMPANY</li>
              <li>한눈에 보기</li>
              <li>스타벅스 사명</li>
              <li>스타벅스 소개</li>
              <li>국내 뉴스룸</li>
              <li>세계의 스타벅스</li>
              <li>글로벌 뉴스룸</li>
            </ul>
            <ul>
              <li className="footerManu">CORPORATE SALES</li>
              <li>단체 및 기업 구매 안내</li>
            </ul>
            <ul>
              <li className="footerManu">PATNERSHIP</li>
              <li>신규 입점 제의</li>
              <li>협력 고객사 등록 신청</li>
            </ul>
            <ul>
              <li className="footerManu">ONLINE COMMMUNITY</li>
              <li>페이스북</li>
              <li>트위터</li>
              <li>유튜브</li>
              <li>블로그</li>
              <li>인스타그램</li>
            </ul>
            <ul>
              <li className="footerManu">RECRUIT</li>
              <li>채용 소개</li>
              <li>채용 지원하기</li>
            </ul>
            <ul>
              <li className="footerManu">WEBUCKS</li>
            </ul>
          </section>
        </footer>
      </body>
    );
  }
}

export default Detail;
