import React from 'react';
import TopNav from '../TopNav/TopNav';
import { Link } from 'react-router-dom';
import './List.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMugHot } from '@fortawesome/free-solid-svg-icons';

class List extends React.Component {
  render() {
    return (
      <div className="List">
        <TopNav></TopNav>
        <section className="listMain">
          <article className="coffee">
            <h1 className="description">
              <span className="coffeeName">콜드 브루 커피</span>
              <FontAwesomeIcon icon={faMugHot} />
              <span className="coffeeOption">
                디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)
              </span>
            </h1>
            <div className="img">
              <div className="imgRow">
                <div>
                  <Link to="/detail">
                    <img
                      src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000002487]_20210426091745467.jpg"
                      alt="나이트로 바닐라 크림"
                    />
                  </Link>
                  <span>나이트로 바닐라 크림</span>
                </div>
                <div>
                  <Link to="/detail">
                    <img
                      src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000479]_20210426091843897.jpg"
                      alt="나이트로 콜드 브루"
                    />
                  </Link>
                  <span>나이트로 콜드 브루</span>
                </div>
                <div>
                  <Link to="/detail">
                    <img
                      src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000002081]_20210415133656839.jpg"
                      alt="돌체 콜드 브루"
                    />
                  </Link>
                  <span>돌체 콜드 브루</span>
                </div>
                <div>
                  <Link to="/detail">
                    <img
                      src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000487]_20210430112319040.jpg"
                      alt="바닐라 크림 콜드 브루"
                    />
                  </Link>
                  <span>바닐라 크림 콜드 브루</span>
                </div>
                <div>
                  <Link to="/detail">
                    <img
                      src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/03/[9200000003509]_20210322093452399.jpg"
                      alt="벨벳 다크 모카 나이트로"
                    />
                  </Link>
                  <span>벨벳 다크 모카 나이트로</span>
                </div>
                <div>
                  <Link to="/detail">
                    <img
                      src="https://image.istarbucks.co.kr/upload/store/skuimg/2020/09/[9200000002672]_20200921171223898.jpg"
                      alt="제주 비자림 콜드 브루"
                    />
                  </Link>
                  <span>제주 비자림 콜드 브루</span>
                </div>
                <div>
                  <Link to="/detail">
                    <img
                      src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000038]_20210430113202458.jpg"
                      alt="콜드 브루"
                    />
                  </Link>
                  <span>콜드 브루</span>
                </div>
                <div>
                  <Link to="/detail">
                    <img
                      src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/02/[9200000001636]_20210225093600536.jpg"
                      alt="콜드 브루 몰트"
                    />
                  </Link>
                  <span>콜드 브루 몰트</span>
                </div>
                <div>
                  <Link to="/detail">
                    <img
                      src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000003285]_20210416154437069.jpg"
                      alt="콜드 브루 오트 라떼"
                    />
                  </Link>
                  <span>콜드 브루 오트 라떼</span>
                </div>
              </div>
            </div>
          </article>
          <article className="coffee">
            <h1 className="description">
              <span className="coffeeName">브루드 커피</span>
              <FontAwesomeIcon icon={faMugHot} />
              <span className="coffeeOption">
                디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)
              </span>
            </h1>
            <div className="img">
              <div className="imgRow">
                <div>
                  <Link to="/detail">
                    <img
                      src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[106509]_20210430111852870.jpg"
                      alt="아이스 커피"
                    />
                  </Link>
                  <span>아이스 커피</span>
                </div>
                <div>
                  <Link to="/detail">
                    <img
                      src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[2]_20210430111934117.jpg"
                      alt="오늘의 커피"
                    />
                  </Link>
                  <span>오늘의 커피</span>
                </div>
              </div>
            </div>
          </article>
        </section>

        <script src="js/list.js"></script>
        <script
          src="https://kit.fontawesome.com/e3186f2480.js"
          crossorigin="anonymous"
        ></script>
      </div>
    );
  }
}

export default List;
