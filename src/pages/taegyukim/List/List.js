import React from 'react';
import TopNav from '../TopNav/TopNav';
import './List.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMugHot } from '@fortawesome/free-solid-svg-icons';
import { FISRT_DATA } from '../data/listData';
import { SECOND_DATA } from '../data/listData';
import CoffeeCard from '../CoffeeCard/CoffeeCard';

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
                {FISRT_DATA.map(data => {
                  return (
                    <CoffeeCard key={data.id} img={data.img} text={data.text} />
                  );
                })}
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
                {SECOND_DATA.map(data => {
                  return (
                    <CoffeeCard key={data.id} img={data.img} text={data.text} />
                  );
                })}
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
