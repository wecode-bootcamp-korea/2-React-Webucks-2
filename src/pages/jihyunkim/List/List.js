import React from 'react';
import Nav from '../Nav/Nav';
import './List.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

class List extends React.Component {
  render() {
    return (
      <div className="List">
        <div className="content">
          <Nav />
          <div className="coldBrew">
            <div className="coldBrewMenu">
              <span>콜드 브루 커피</span>
              <FontAwesomeIcon icon={faCoffee} />
              <span>디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)</span>
            </div>
            <ul className="coldBrewList">
              <li className="cold-brew-1">
                <div className="coldBrewImage">
                  <img
                    src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/08/[9200000003661]_20210819094346176.jpg"
                    alt="시그니처 더 블랙 콜드 브루"
                  />
                </div>
                <p>시그니처 더 블랙 콜드 브루</p>
              </li>
              <li className="cold-brew-2">
                <div className="coldBrewImage">
                  <img
                    src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/06/[9200000003643]_20210623101238720.jpg"
                    alt="아이스크림 블렌딩 콜드 브루"
                  />
                </div>
                <p>아이스크림 블렌딩 콜드 브루</p>
              </li>
              <li className="cold-brew-3">
                <div className="coldBrewImage">
                  <img
                    src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000002487]_20210426091745467.jpg"
                    alt="나이트로 바닐라 크림"
                  />
                </div>
                <p>나이트로 바닐라 크림</p>
              </li>
              <li className="cold-brew-4">
                <div className="coldBrewImage">
                  <img
                    src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000479]_20210426091843897.jpg"
                    alt="나이트로 콜드 브루"
                  />
                </div>
                <p>나이트로 콜드 브루</p>
              </li>
              <li className="cold-brew-5">
                <div className="coldBrewImage">
                  <img
                    src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000002081]_20210415133656839.jpg"
                    alt="돌체 콜드 브루"
                  />
                </div>
                <p>돌체 콜드 브루</p>
              </li>
              <li className="cold-brew-6">
                <div className="coldBrewImage">
                  <img
                    src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000487]_20210430112319040.jpg"
                    alt="바닐라 크림 콜드 브루"
                  />
                </div>
                <p>바닐라 크림 콜드 브루</p>
              </li>
              <li className="cold-brew-7">
                <div className="coldBrewImage">
                  <img
                    src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/03/[9200000003509]_20210322093452399.jpg"
                    alt="벨벳 다크 모카 나이트로"
                  />
                </div>
                <p>벨벳 다크 모카 나이트로</p>
              </li>
              <li className="cold-brew-8">
                <div className="coldBrewImage">
                  <img
                    src="https://image.istarbucks.co.kr/upload/store/skuimg/2020/09/[9200000002672]_20200921171223898.jpg"
                    alt="제주 비자림 콜드 브루"
                  />
                </div>
                <p>제주 비자림 콜드 브루</p>
              </li>
              <li className="cold-brew-9">
                <div className="coldBrewImage">
                  <img
                    src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000038]_20210430113202458.jpg"
                    alt="콜드 브루"
                  />
                </div>
                <p>콜드 브루</p>
              </li>
              <li className="cold-brew-10">
                <div className="coldBrewImage">
                  <img
                    src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/02/[9200000001636]_20210225093600536.jpg"
                    alt="콜드 브루 몰트"
                  />
                </div>
                <p>콜드 브루 몰트</p>
              </li>
            </ul>
          </div>
          <div className="brewedCoffee">
            <div className="brewedCoffeeMenu">
              <span>브루드 커피</span>
              {/* <FontAwesomeIcon icon={faCoffee} /> */}
              <span>디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)</span>
            </div>
            <ul className="brewedCoffeeList">
              <li className="brewed-coffee-1">
                <div className="brewedCoffeeImage">
                  <img
                    src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[106509]_20210430111852870.jpg"
                    alt="아이스 커피"
                  />
                </div>
                <p>아이스 커피</p>
              </li>
              <li className="brewed-coffee-2">
                <div className="brewedCoffeeImage">
                  <img
                    src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[2]_20210430111934117.jpg"
                    alt="오늘의 커피"
                  />
                </div>
                <p>오늘의 커피</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default List;
