import React from 'react';
import '../../../styles/reset.scss';
import '../../../styles/common.scss';
import TopNav from '../TopNav/TopNav';
import './List.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

class List extends React.Component {
  render() {
    return (
      <body className="List">
        <TopNav />
        <p className="subtitle">
          <span className="coffeeTitle">콜드 브루 커피</span> &nbsp;{' '}
          <FontAwesomeIcon icon={faCoffee} />
          &nbsp;&nbsp; 디카페인 에스프레소 샷 추가 가능(일부 음료 제외)
        </p>

        <section className="coffee">
          <ul className="items">
            <li>
              <div className="hoverImg">
                <img
                  alt="나이트로 바닐라 크림"
                  src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000002487]_20210426091745467.jpg"
                />
              </div>
              <span>나이트로 바닐라 크림</span>
            </li>
            <li>
              <div className="hoverImg">
                <img
                  alt="나이트로 콜드 브루"
                  src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000479]_20210426091843897.jpg"
                />
              </div>
              <span>나이트로 콜드 브루</span>
            </li>
            <li>
              <div className="hoverImg">
                <img
                  alt="돌체 콜드 브루"
                  src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000002081]_20210415133656839.jpg"
                />
              </div>
              <span>돌체 콜드 브루</span>
            </li>
            <li>
              <div className="hoverImg">
                <img
                  alt="벨벳 다크 모카 나이트로"
                  src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000487]_20210430112319040.jpg"
                />
              </div>
              <span>벨벳 다크 모카 나이트로</span>
            </li>
            <li>
              <div className="hoverImg">
                <img
                  alt="바닐라 크림 콜드 브루"
                  src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/03/[9200000003509]_20210322093452399.jpg"
                />
              </div>
              <span>바닐라 크림 콜드 브루</span>
            </li>
            <li>
              <div className="hoverImg">
                <img
                  alt="제주 비자림 콜드 브루"
                  src="https://image.istarbucks.co.kr/upload/store/skuimg/2020/09/[9200000002672]_20200921171223898.jpg"
                />
              </div>
              <span>제주 비자림 콜드 브루</span>
            </li>
            <li>
              <div className="hoverImg">
                <img
                  alt="콜드 브루"
                  src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000038]_20210430113202458.jpg"
                />
              </div>
              <span>콜드 브루</span>
            </li>
            <li>
              <div className="hoverImg">
                <img
                  alt="콜드 브루 몰트"
                  src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/02/[9200000001636]_20210225093600536.jpg"
                />
              </div>
              <span>콜드 브루 몰트</span>
            </li>
            <li>
              <div className="hoverImg">
                <img
                  alt="콜드 브루 오트 라떼"
                  src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000003285]_20210416154437069.jpg"
                />
              </div>
              <span>콜드 브루 오트 라떼</span>
            </li>
          </ul>
        </section>

        <p className="subtitle">
          <span className="coffeeTitle">브루드 커피 &nbsp;&nbsp;</span>
          <FontAwesomeIcon icon={faCoffee} />
          &nbsp;&nbsp;디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)
        </p>

        <section className="coffee">
          <ul className="items" id="brewedItmes">
            <li>
              <div className="hoverImg">
                <img
                  alt="콜드 브루 플로트"
                  src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/02/[9200000001635]_20210225092236748.jpg"
                />
              </div>
              <span>콜드 브루 플로트</span>
            </li>
            <li>
              <div className="hoverImg">
                <img
                  alt="프렌치 애플 타르트 나이트로"
                  src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/03/[9200000003507]_20210322093414289.jpg"
                />
              </div>
              <span>프렌치 애플 타르트 나이트로</span>
            </li>
          </ul>
        </section>
      </body>
    );
  }
}

export default List;
