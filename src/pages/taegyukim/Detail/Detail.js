import React from 'react';
import TopNav from '../TopNav/TopNav';
import BottomFooter from './BottomFooter';
import LikeBtn from './LikeBtn';
import './Detail.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

class Detail extends React.Component {
  constructor() {
    super();
    this.state = {
      isValidHeart: false,
      reviewComment: '',
      reviewArray: [],
    };
  }

  handleHeartColor = () => {
    this.setState({
      isValidHeart: !this.state.isValidHeart,
    });
  };

  handleReviewInput = event => {
    this.setState({
      reviewComment: event.target.value,
    });
  };

  pushReviewComment = event => {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.state.reviewArray.push(this.state.reviewComment);
      event.target.value = '';
      this.setState({
        reviewComment: '',
      });
    }
  };

  deleteReviewComment = idx => {
    this.state.reviewArray.splice(idx, 1);
    const newReviewArray = this.state.reviewArray;
    this.setState({
      reviewArray: newReviewArray,
    });
  };

  render() {
    return (
      <div className="Detail">
        <TopNav />
        <nav className="secondNav">
          <div className="title">
            <span className="titleCoffee">돌체 콜드 브루</span>
            <span className="titleMenu">
              홈 {'>'} MENU {'>'} 음료 {'>'} 에스프레소 {'>'} 화이트 초콜릿 모카
            </span>
          </div>
        </nav>
        <section className="detailMain">
          <article className="detail">
            <img
              src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000002081]_20210415133657016.jpg"
              alt="돌체 콜드 브루"
            />
            <div className="detailInfo">
              <div className="detailInfoTitle">
                <div className="detailInfoTitleName">
                  <h1>돌체 콜드 브루</h1>
                  <span>Dolce Cold Brew</span>
                </div>
                <FontAwesomeIcon
                  icon={faHeart}
                  className={this.state.isValidHeart ? 'redHeart' : 'remove'}
                  onClick={this.handleHeartColor}
                />
              </div>
              <div className="detailInfoDescription">
                <span>
                  무더운 여름철, 동남아 휴가지에서 즐기는 커피를 떠오르게 하는
                  스타벅스 음료의 베스트 x 베스트 조합인 돌체 콜드 브루를
                  만나보세요!
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
                    <span>265</span>
                  </div>
                  <div>
                    <span>포화지방 (g)</span>
                    <span>9</span>
                  </div>
                  <div>
                    <span>단백질 (g)</span>
                    <span>8</span>
                  </div>
                </div>
                <div>
                  <div>
                    <span>나트륨 (mg)</span>
                    <span>115</span>
                  </div>
                  <div>
                    <span>당류 (g)</span>
                    <span>29</span>
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
                    <span>오늘도 돌체 콜드 브루를 마시러 갑니다.</span>
                  </div>
                  <div>
                    <span>legend_dev</span>
                    <span>진짜 돌체 콜드 브루는 전설이다.</span>
                  </div>
                  <ul id="reviewList">
                    {this.state.reviewArray.map((review, idx) => {
                      return (
                        <li key={idx}>
                          {review}
                          <button
                            key={idx}
                            onClick={event =>
                              this.deleteReviewComment(idx, event)
                            }
                          >
                            ❌
                          </button>
                          <LikeBtn />
                        </li>
                      );
                    })}
                  </ul>
                  <form id="reviewForm">
                    <input
                      onChange={this.handleReviewInput}
                      onKeyPress={this.pushReviewComment}
                      type="text"
                      placeholder="리뷰를 입력해주세요."
                    />
                  </form>
                </div>
              </div>
            </div>
          </article>
        </section>
        <BottomFooter />
      </div>
    );
  }
}

export default Detail;
