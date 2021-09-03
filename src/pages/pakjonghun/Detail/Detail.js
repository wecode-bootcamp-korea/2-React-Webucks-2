import React from 'react';
import BorderLine from './Components/BorderLine/BorderLine';
import Footer from './Components/Footer/Footer';
import Heart from '../CommonComponents/Heart/Heart';
import Comment from './Components/Comment/Comment';
import './Detail.scss';
import { withRouter } from 'react-router-dom';
import Nav from '../CommonComponents/Nav/Nav';

class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.data = props.location.state.data;
    this.state = { img: '', coffeeName: '', isGetHeart: '', id: '' };
    this.setCoffeeData = this.setCoffeeData.bind(this);
  }

  componentDidMount() {
    this.setState(() => ({
      img: this.data.img,
      coffeeName: this.data.coffeeName,
      isGetHeart: this.data.isGetHeart,
      id: this.data.id,
    }));
  }

  setCoffeeData(data) {
    this.setState(() => ({ ...data[0] }));
  }

  render() {
    return (
      <div className="Detail">
        <Nav />
        <main className="detail__main divied__grid">
          <img
            src={this.state.img}
            alt={this.state.coffeeName}
            className="detail__img"
            id="detail__img"
          />
          <div>
            <div className="detailTitle">
              <div className="title__titles">
                <h2 id="detail__title">{this.state.coffeeName}</h2>
                <h3 className="title__title2">White Choocolate Mocha</h3>
              </div>
              <Heart
                isGetHeart={this.state.isGetHeart}
                id={this.state.id}
                setDb={this.setCoffeeData}
                db={[this.state]}
              />
            </div>
            <BorderLine classNameName={'deatil__light-line'} />
            <span className="detail__desc">
              달콤하고 부드러움 화이트 초콜릿 시럽과 에스프레소를 스팀 밀크와
              섞어서 휘핑크림으로 마무리한 음료로 달콤함과 강렬한 에스프레소가
              부드럽게 어우러진 커피
            </span>

            <BorderLine className={'detail__line'} />

            <div className="detail__ingredient">
              <h3 className="ingredient__title">제품 영양 정보</h3>
              <br />
              <h3 className="ingredient__title2">Tall(톨)/355ml(12 fl oz)</h3>
            </div>

            <BorderLine className={'deatil__light-line'} />

            <div className="detail__ingredient-ingredient divied__grid">
              <div className="ingredient__column">
                <div className="ingredient__row">
                  <span className="ingredient-item">1회 지공량(kcal)</span>
                  <span className="ingredient-item">345</span>
                </div>
                <div className="ingredient__row">
                  <span className="ingredient-item">포화지방(g)</span>
                  <span className="ingredient-item">11</span>
                </div>
                <div className="ingredient__row">
                  <span className="ingredient-item">단백질(g)</span>
                  <span className="ingredient-item">11</span>
                </div>
              </div>

              <div className="ingredient__column">
                <div className="ingredient__row">
                  <span className="ingredient-item">나트륨(mg)</span>
                  <span className="ingredient-item">150</span>
                </div>
                <div className="ingredient__row">
                  <span className="ingredient-item">당류(g)</span>
                  <span className="ingredient-item">35</span>
                </div>
                <div className="ingredient__row">
                  <span className="ingredient-item">카페인(mg)</span>
                  <span className="ingredient-item">75</span>
                </div>
              </div>
            </div>

            <div className="ingredient__allegy">
              <span className="allergy__desc">알레르기 유발 요인 : 우유</span>
            </div>

            <h3 className="detail__bottom-title title--h1">리뷰</h3>

            <BorderLine className={'deatil__light-line'} />

            <Comment />
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default withRouter(Detail);
