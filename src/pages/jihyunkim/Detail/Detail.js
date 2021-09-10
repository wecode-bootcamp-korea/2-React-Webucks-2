import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import TopNav from '../TopNav/TopNav';
import ReviewLike from './ReviewLike';
import './Detail.scss';

class Detail extends React.Component {
  constructor() {
    super();
    this.state = {
      isLiked: false,
      review: '',
      reviewList: [],
      id: 0,
    };
  }

  checkLike = () => {
    const { isLiked } = this.state;
    this.setState({
      isLiked: !isLiked,
      icon: { fasHeart },
    });
  };

  handleReviewInput = ev => {
    const { value } = ev.target;
    this.setState({
      review: value,
    });
  };

  addReview = ev => {
    const { reviewList, review, id } = this.state;
    if (ev.key === 'Enter') {
      ev.preventDefault();
      ev.target.value = '';
      if (review !== '') {
        const newReview = {
          id: id + 1,
          comment: review,
          isLikedReview: false,
        };
        this.setState({
          id: id + 1,
          review: '',
          reviewList: [...reviewList, newReview],
        });
      }
    }
  };

  checkReviewLike = id => {
    const { reviewList } = this.state;
    const newReviewList = [...reviewList];
    for (let i = 0; i < newReviewList.length; i++) {
      if (newReviewList[i].id === id) {
        newReviewList[i].isLikedReview = !newReviewList[i].isLikedReview;
      }
      this.setState({
        reviewList: newReviewList,
      });
    }
  };

  deleteReview = id => {
    const { reviewList } = this.state;
    this.setState({
      reviewList: reviewList.filter(review => review.id !== id),
    });
  };

  render() {
    return (
      <div className="Detail">
        <div className="content">
          <TopNav />
          <div className="category">
            <h1 id="coldBrewTitle">콜드브루</h1>
            <p id="route">
              {' '}
              홈 {'>'} MENU {'>'} 음료 {'>'} 콜드 브루 {'>'} 돌체 콜드 브루
            </p>
          </div>
          <main className="menuDetail">
            <div className="DetailLeft">
              <img
                src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000002081]_20210415133656839.jpg"
                alt="돌체 콜드 브루"
              />
            </div>
            <div className="DetailRight">
              <div className="DetailRightTitle">
                <div className="menuNames">
                  <div id="menuName">돌체 콜드 브루</div>
                  <div id="menuNameEnglish">Dolce Cold Brew</div>
                </div>
                <div className="like">
                  <FontAwesomeIcon
                    onClick={this.checkLike}
                    icon={this.state.isLiked ? fasHeart : farHeart}
                    className={this.state.isLiked ? 'fas' : 'fa-heart'}
                  />
                </div>
              </div>
              <div className="DetailRightMain">
                <p className="menuIntro">
                  무더운 여름철, 동남아 휴가지에서 즐기는 커피를 떠오르게 하는
                  <br /> 스타벅스 음료의 베스트 x 베스트 조합인 돌체 콜드 브루를
                  만나보세요!
                </p>
                <div className="nutrition">
                  <div className="nutritionTitle">
                    <div>제품 영양 정보</div>
                    <div>Tall(톨) / 355ml (12 fl oz)</div>
                  </div>
                  <div className="nutritionMain">
                    <div className="nutritionBox">
                      <ul className="nutritionBoxLeft">
                        <li className="nutri1">
                          <div>1회 제공량 (kcal)</div>
                          <div>265</div>
                        </li>
                        <li className="nutri2">
                          <div>포화지방 (g)</div>
                          <div>9</div>
                        </li>
                        <li className="nutri3">
                          <div>단백질 (g)</div>
                          <div>8</div>
                        </li>
                      </ul>
                      <ul className="nutritionBoxRight">
                        <li className="nutri4">
                          <div>나트륨 (mg)</div>
                          <div>115</div>
                        </li>
                        <li className="nutri5">
                          <div>당류 (g)</div>
                          <div>29</div>
                        </li>
                        <li className="nutri6">
                          <div>카페인 (mg)</div>
                          <div>150</div>
                        </li>
                      </ul>
                    </div>
                    <div id="alergy">알레르기 유발 요인 : 우유</div>
                  </div>
                </div>
              </div>
              <div className="detailRightReview">
                <div id="reviewTitle">리뷰</div>
                <ul className="reviews">
                  {this.state.reviewList.map((review, id) => {
                    return (
                      <li key={review.id} className="review">
                        <p>{review.comment}</p>
                        <span>
                          <ReviewLike
                            checkReviewLike={this.checkReviewLike}
                            id={review.id}
                            isLiked={review.isLikedReview}
                          />
                          &nbsp; &nbsp;
                          <span
                            className="reviewDelete"
                            onClick={() => {
                              this.deleteReview(review.id);
                            }}
                          >
                            ❌
                          </span>
                        </span>
                      </li>
                    );
                  })}
                </ul>
                <form>
                  <input
                    onChange={this.handleReviewInput}
                    onKeyPress={this.addReview}
                    className="reviewInput"
                    type="text"
                    placeholder="리뷰를 입력해주세요"
                  />
                </form>
              </div>
            </div>
          </main>
        </div>
        <footer className="footer">
          <div className="company">
            <div>COMPANY</div>
            <ul className="companylist">
              <li>한눈에 보기</li>
              <li>스타벅스 사명</li>
              <li>스타벅스 소개</li>
              <li>국내 뉴스룸</li>
              <li>세계의 스타벅스</li>
              <li>글로벌 뉴스룸</li>
            </ul>
          </div>
          <div className="corporateSales">
            <div>CORPORATE SALES</div>
            <ul className="corporateSalesList">
              <li>단체 및 기업 구매 안내</li>
            </ul>
          </div>
          <div className="partnership">
            <div>PARTNERSHIP</div>
            <ul className="partnershipList">
              <li>신규 입점 제의</li>
              <li>협력 고객사 등록 신청</li>
            </ul>
          </div>
          <div className="onlineCommunity">
            <div>ONLINE COMMUNITY</div>
            <ul className="partnershipList">
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
