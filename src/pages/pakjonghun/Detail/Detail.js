import React from 'react';
import { withRouter } from 'react-router-dom';
import BorderLine from './Components/BorderLine/BorderLine';
import Footer from './Components/Footer/Footer';
import Heart from '../CommonComponents/Heart/Heart';
import Comment from './Components/Comment/Comment';
import Nav from '../CommonComponents/Nav/Nav';
import Photo from '../CommonComponents/Photo/Photo';
import { CoffeeContext } from '../../../Context';
import './Detail.scss';

class Detail extends React.Component {
  static contextType = CoffeeContext;

  render() {
    const {
      props: {
        location: {
          state: {
            data: { layoutName, img, name, id },
          },
        },
      },
    } = this;

    const {
      context: { updateById, findHeartById },
    } = this;

    const isLike = findHeartById(id, layoutName);

    return (
      <div className="Detail">
        <Nav />
        <main className="diviedGrid">
          <Photo img={img} name={name} className={'detailImg'} />
          <div>
            <div className="detailTitle">
              <div>
                <h2>{name}</h2>
                <h3>White Choocolate Mocha</h3>
              </div>
              <Heart
                isLike={isLike}
                id={id}
                updateById={updateById}
                layoutName={layoutName}
              />
            </div>
            <BorderLine classNameName={'deatilLightLine'} />
            <span className="detail__desc">
              달콤하고 부드러움 화이트 초콜릿 시럽과 에스프레소를 스팀 밀크와
              섞어서 휘핑크림으로 마무리한 음료로 달콤함과 강렬한 에스프레소가
              부드럽게 어우러진 커피
            </span>

            <BorderLine className={'detailLine'} />

            <div className="detailIngredient">
              <h3>제품 영양 정보</h3>
              <br />
              <h3>Tall(톨)/355ml(12 fl oz)</h3>
            </div>

            <BorderLine className={'deatilLightLine'} />

            <div className="detailIngredient diviedGrid">
              <div className="ingredientColumn">
                <div className="ingredientRow">
                  <span>1회 지공량(kcal)</span>
                  <span>345</span>
                </div>
                <div className="ingredientRow">
                  <span>포화지방(g)</span>
                  <span>11</span>
                </div>
                <div className="ingredientRow">
                  <span>단백질(g)</span>
                  <span>11</span>
                </div>
              </div>

              <div className="ingredientColumn">
                <div className="ingredientRow">
                  <span>나트륨(mg)</span>
                  <span>150</span>
                </div>
                <div className="ingredientRow">
                  <span>당류(g)</span>
                  <span>35</span>
                </div>
                <div className="ingredientRow">
                  <span>카페인(mg)</span>
                  <span>75</span>
                </div>
              </div>
            </div>

            <div className="ingredientAllegy">
              <span>알레르기 유발 요인 : 우유</span>
            </div>

            <h3>리뷰</h3>

            <BorderLine className={'deatilLightLine'} />
            <div className="commentContainer">
              <Comment />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default withRouter(Detail);
