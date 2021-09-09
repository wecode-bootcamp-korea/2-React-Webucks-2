import React, { Component } from 'react';
import { withRouter } from 'react-router';
import HeartIcon from '../Heart/HeartIcon';
import Review from './Review';

class DetailMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLiked: 0,
      detailData: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/listData.json')
      .then(res => res.json())
      .then(data => {
        const listId = this.props.location.state?.id;
        let detailData = data.find(el => listId === el.id);
        if (!detailData) detailData = data[0];
        this.setState({
          isLiked: detailData.isLiked,
          detailData,
        });
      });
  }

  clickLiked = () => {
    const { isLiked } = this.state;
    this.setState({
      isLiked: !isLiked,
    });
  };

  render() {
    const { detailData } = this.state;
    console.log(detailData.isLiked);
    return (
      <main id="main" key={detailData.id}>
        <nav className="title">
          <h1 id="titleMenu">{detailData.category}</h1>
          <p id="titleRoot" name="menu">
            홈{'>'}MENU{'>'}음료{'>'} {detailData.category} {'>'}{' '}
            {detailData?.name}
          </p>
        </nav>
        <section className="item">
          <img
            className="itemImg"
            alt={detailData.name}
            src={detailData.imgUrl}
          />

          <aside className="itemContent">
            <header>
              <div className="itemNav">
                <span className="itemTitle">
                  <h3>{detailData.name}</h3>
                  <p>{detailData.engName}</p>
                </span>
                <HeartIcon
                  isLiked={this.state.isLiked}
                  clickLiked={this.clickLiked}
                />
              </div>
              <p id="contentFontSize">{detailData.summary}</p>
            </header>

            <main>
              <header className="tableHeader">
                <p>제품 영양 정보</p>
                <p>{detailData.nutritionFacts?.servingSize}</p>
              </header>
              <main className="flex">
                <div className="list">
                  <ul className="listStyle">
                    <li>1회 제공량 (kcal)</li>
                    <li>포화지방 (g)</li>
                    <li>단백질 (g)</li>
                  </ul>
                  <ul className="listStyle">
                    <li>{detailData.nutritionFacts?.kcal}</li>
                    <li>{detailData.nutritionFacts?.fat}</li>
                    <li>{detailData.nutritionFacts?.protein}</li>
                  </ul>
                </div>
                <div className="list">
                  <ul className="listStyle">
                    <li>나트륨 (mg)</li>
                    <li>당류 (g)</li>
                    <li>카페인 (mg)</li>
                  </ul>
                  <ul className="listStyle">
                    <li>{detailData.nutritionFacts?.natrium}</li>
                    <li>{detailData.nutritionFacts?.sugars}</li>
                    <li>{detailData.nutritionFacts?.caffeine}</li>
                  </ul>
                </div>
              </main>
              <footer className="tableFooter">
                <p>알레르기 유발요인 : {detailData.nutritionFacts?.allergen}</p>
              </footer>
            </main>
            <Review />
          </aside>
        </section>
      </main>
    );
  }
}
export default withRouter(DetailMain);
