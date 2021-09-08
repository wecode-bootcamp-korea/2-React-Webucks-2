import React from 'react';
import { withRouter } from 'react-router-dom';
import BorderLine from './Components/BorderLine/BorderLine';
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

            <div className="detailIngredient">
              <table>
                <thead>
                  <tr>
                    <td colSpan="4">영양소</td>
                    <td colSpan="4">영양소</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td></td>
                  </tr>
                  <tr>
                    <td>단백질</td>
                    <td>200</td>
                    <td>단백질</td>
                    <td>500</td>
                    <td>단백질</td>
                    <td>200</td>
                    <td>단백질</td>
                    <td>500</td>
                  </tr>
                  <tr>
                    <td>단백질</td>
                    <td>200</td>
                    <td>단백질</td>
                    <td>500</td>
                    <td>단백질</td>
                    <td>200</td>
                    <td>단백질</td>
                    <td>500</td>
                  </tr>
                  <tr>
                    <td>단백질</td>
                    <td>200</td>
                    <td>단백질</td>
                    <td>500</td>
                    <td>단백질</td>
                    <td>200</td>
                    <td>단백질</td>
                    <td>500</td>
                  </tr>
                </tbody>
              </table>
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
      </div>
    );
  }
}

export default withRouter(Detail);
