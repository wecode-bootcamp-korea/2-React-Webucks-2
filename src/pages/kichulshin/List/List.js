import React from 'react';
import './List.scss';
import Nav from '../Nav/Nav';

class List extends React.Component {
  render() {
    return (
      <div>
        <main>
          <section className="coldbrew">
            <dt className="introEach">
              <span className="eachTitle">콜드 브루 커피</span>
              <img
                src="https://image.istarbucks.co.kr/common/img/menu/logo_decaf.png"
                alt="decaf logo"
                class="decaf"
              />
              <span>디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)</span>
            </dt>
            <ul>
              <li>
                <dt className="everyimg">
                  <img
                    src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/08/[9200000003661]_20210819094346176.jpg"
                    alt="시그니처 더 블랙 콜드 브루"
                  />
                </dt>
                <dd>시그니처 더 블랙 콜드 브루</dd>
              </li>
              <li>
                <dt className="everyimg">
                  <img
                    src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/06/[9200000003643]_20210623101238720.jpg"
                    alt="아이스크림 블렌딩 콜드 브루"
                  />
                </dt>
                <dd>아이스크림 블렌딩 콜드 브루</dd>
              </li>
              <li>
                <dt className="everyimg">
                  <img
                    src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000002487]_20210426091745467.jpg"
                    alt="나이트로 바닐라 크림"
                  />
                </dt>
                <dd>나이트로 바닐라 크림</dd>
              </li>
              <li>
                <dt className="everyimg">
                  <img
                    src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000479]_20210426091843897.jpg"
                    alt="나이트로 콜드 브루"
                  />
                </dt>
                <dd>나이트로 콜드 브루</dd>
              </li>
              <li>
                <dt className="everyimg">
                  <img
                    src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000002081]_20210415133656839.jpg"
                    alt="돌체 콜드 브루"
                  />
                </dt>
                <dd>돌체 콜드 브루</dd>
              </li>
              <li>
                <dt className="everyimg">
                  <img
                    src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000487]_20210430112319040.jpg"
                    alt="바닐라 크림 콜드 브루"
                  />
                </dt>
                <dd>바닐라 크림 콜드 브루</dd>
              </li>
              <li>
                <dt className="everyimg">
                  <img
                    src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/03/[9200000003509]_20210322093452399.jpg"
                    alt="벨벳 다크 모카 나이트로"
                  />
                </dt>
                <dd>벨벳 다크 모카 나이트로</dd>
              </li>
              <li>
                <dt className="everyimg">
                  <img
                    src="https://image.istarbucks.co.kr/upload/store/skuimg/2020/09/[9200000002672]_20200921171223898.jpg"
                    alt="제주 비자림 콜드 브루"
                  />
                </dt>
                <dd>제주 비자림 콜드 브루</dd>
              </li>
              <li>
                <dt className="everyimg">
                  <img
                    src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000038]_20210430113202458.jpg"
                    alt="콜드 브루"
                  />
                </dt>
                <dd>콜드 브루</dd>
              </li>
              <li>
                <dt className="everyimg">
                  <img
                    src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/02/[9200000001636]_20210225093600536.jpg"
                    alt="콜드 브루 몰트"
                  />
                </dt>
                <dd>콜드 브루 몰트</dd>
              </li>
            </ul>
          </section>
          <section className="brewed">
            <dt className="introEach">
              <span className="eachTitle">브루드 커피</span>
              <img
                src="https://image.istarbucks.co.kr/common/img/menu/logo_decaf.png"
                alt="decaf logo"
                className="decaf"
              />
              <span>디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)</span>
            </dt>
            <ul>
              <li>
                <dt className="everyimg">
                  <img
                    src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[106509]_20210430111852870.jpg"
                    alt="아이스 커피"
                  />
                </dt>
                <dd>아이스 커피</dd>
              </li>
              <li>
                <dt className="everyimg">
                  <img
                    src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[2]_20210430111934117.jpg"
                    alt="오늘의 커피"
                  />
                </dt>
                <dd>오늘의 커피</dd>
              </li>
            </ul>
          </section>
        </main>
      </div>
    );
  }
}

export default List;
