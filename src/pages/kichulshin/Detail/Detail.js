import React from 'react';
import TopNav from '../Nav/TopNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import './Detail.scss';

class Detail extends React.Component {
  constructor() {
    super();
    this.state = {
      isLike: false,
      review: '',
      reviewArr: [],
    };
  }

  checkLike = () => {
    this.setState({
      isLike: !this.state.isLike,
      icon: { fasHeart },
    });
  };

  handleReviewInput = event => {
    this.setState({
      review: event.target.value,
    });
  };

  addReview = putReview => {
    if (putReview.key === 'Enter' && putReview.target.value !== '') {
      this.state.reviewArr.push(this.state.review);
      putReview.target.value = '';
      this.setState({
        review: '',
      });
    }
  };

  render() {
    return (
      <div className="Detail">
        <TopNav />
        <main className="content">
          <div className="coffeeName">
            <div id="coldBrewTitle">콜드브루</div>
            <p id="route">
              {' '}
              홈 {'>'} MENU {'>'} 음료 {'>'} 콜드 브루 {'>'} 돌체 콜드 브루
            </p>
          </div>
          <div className="menuDetail">
            <div className="menuPicture">
              <img
                src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000002081]_20210415133656839.jpg"
                alt="돌체 콜드 브루"
              />
            </div>
            <div className="menuExplain">
              <div className="menuExTitle">
                <div className="menuNames">
                  <div id="menuName">돌체 콜드 브루</div>
                  <div id="menuNameEnglish">Dolce Cold Brew</div>
                </div>
                <div className="like">
                  <FontAwesomeIcon
                    onClick={this.checkLike}
                    icon={this.state.isLike ? fasHeart : farHeart}
                    className={this.state.isLike ? 'fas' : 'fa-heart'}
                  />
                </div>
              </div>
              <div className="menuDetailRightMain">
                <p className="menuIntro">
                  무더운 여름철, 동남아 휴가지에서 즐기는 커피를 떠오르게 하는
                  스타벅스 음료의 베스트 x 베스트 조합인 돌체 콜드 브루를
                  만나보세요!
                </p>
                <div className="nutrition">
                  <div className="nutritionTitle">
                    <div>제품 영양 정보</div>
                    <div>Tall(톨) / 355ml (12 fl oz)</div>
                  </div>
                  <div className="nutritionMain">
                    <div className="nutritionTable">
                      <ul className="nutritionLeft">
                        <li className="calorie">
                          <div>1회 제공량 (kcal)</div>
                          <div>265</div>
                        </li>
                        <li className="fat">
                          <div>포화지방 (g)</div>
                          <div>9</div>
                        </li>
                        <li className="protein">
                          <div>단백질 (g)</div>
                          <div>8</div>
                        </li>
                      </ul>
                      <ul className="nutritionRight">
                        <li class="natrium">
                          <div>나트륨 (mg)</div>
                          <div>115</div>
                        </li>
                        <li className="sugar">
                          <div>당류 (g)</div>
                          <div>29</div>
                        </li>
                        <li className="caffeine">
                          <div>카페인 (mg)</div>
                          <div>150</div>
                        </li>
                      </ul>
                    </div>
                    <div id="alergy">알레르기 유발 요인 : 우유</div>
                  </div>
                </div>
              </div>
              <div className="menuDetailRightReview">
                <div id="reviewTitle">리뷰</div>
                <div className="reviews"></div>
                <ul className="review">
                  {this.state.reviewArr.map((comment, id) => {
                    return (
                      <li className="comment">
                        {comment}
                        <span
                          key={id}
                          onClick={this.deleteReview}
                          className="delReview"
                        >
                          ❌
                        </span>
                      </li>
                    );
                  })}
                </ul>
                <input
                  id="reviewInput"
                  type="text"
                  placeholder="리뷰를 입력해주세요"
                  onKeyPress={this.addReview}
                  onChange={this.handleReviewInput}
                />
              </div>
            </div>
          </div>
        </main>
        <footer className="footer">
          <div className="footerTitle">
            <div>COMPANY</div>
            <ul className="companyList">
              <li>한눈에 보기</li>
              <li>스타벅스 사명</li>
              <li>스타벅스 소개</li>
              <li>국내 뉴스룸</li>
              <li>세계의 스타벅스</li>
              <li>글로벌 뉴스룸</li>
            </ul>
          </div>
          <div className="footerTitle">
            <div>CORPORATE SALES</div>
            <ul className="corporateSalesList">
              <li>단체 및 기업 구매 안내</li>
            </ul>
          </div>
          <div className="footerTitle">
            <div>PARTNERSHIP</div>
            <ul className="partnershipList">
              <li>신규 입점 제의</li>
              <li>협력 고객사 등록 신청</li>
            </ul>
          </div>
          <div className="footerTitle">
            <div>ONLINE COMMUNITY</div>
            <ul className="onlineCommunityList">
              <li>페이스북</li>
              <li>트위터</li>
              <li>유튜브</li>
              <li>블로그</li>
              <li>인스타그램</li>
            </ul>
          </div>
        </footer>
      </div>
    );
  }
}

export default Detail;
