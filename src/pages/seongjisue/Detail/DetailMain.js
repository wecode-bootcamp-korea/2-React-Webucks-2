import React, { Component } from 'react';
import { withRouter } from 'react-router';
import HeartIcon from '../Heart/HeartIcon';
import Review from './Review';

class DetailMain extends Component {
  render() {
    const {
      mainData,
      isLiked,
      clickLiked,
      clickRewLiked,
      name,
      comment,
      cmntList,
      onChangeRew,
      onKeyUpRew,
      deleteRew,
    } = this.props;
    return (
      <main id="main" key={mainData.id}>
        <nav className="title">
          <h1 id="titleMenu">{mainData.category}</h1>
          <p id="titleRoot" name="menu">
            홈{'>'}MENU{'>'}음료{'>'} {mainData.category} {'>'} {mainData.name}
          </p>
        </nav>
        <section className="item">
          <img className="itemImg" alt={mainData.name} src={mainData.imgUrl} />

          <aside className="itemContent">
            <header>
              <div className="itemNav">
                <span className="itemTitle">
                  <h3>{mainData.name}</h3>
                  <p>{mainData.engName}</p>
                </span>
                <HeartIcon isLiked={isLiked} clickLiked={clickLiked} />
              </div>
              <p id="contentFontSize">{mainData.summary}</p>
            </header>

            <main>
              <header className="tableHeader">
                <p>제품 영양 정보</p>
                <p>{mainData.nutritionFacts?.servingSize}</p>
              </header>
              <main className="flex">
                <div className="list">
                  <ul className="listStyle">
                    <li>1회 제공량 (kcal)</li>
                    <li>포화지방 (g)</li>
                    <li>단백질 (g)</li>
                  </ul>
                  <ul className="listStyle">
                    <li>{mainData.nutritionFacts?.kcal}</li>
                    <li>{mainData.nutritionFacts?.fat}</li>
                    <li>{mainData.nutritionFacts?.protein}</li>
                  </ul>
                </div>
                <div className="list">
                  <ul className="listStyle">
                    <li>나트륨 (mg)</li>
                    <li>당류 (g)</li>
                    <li>카페인 (mg)</li>
                  </ul>
                  <ul className="listStyle">
                    <li>{mainData.nutritionFacts?.natrium}</li>
                    <li>{mainData.nutritionFacts?.sugars}</li>
                    <li>{mainData.nutritionFacts?.caffeine}</li>
                  </ul>
                </div>
              </main>
              <footer className="tableFooter">
                <p>알레르기 유발요인 : {mainData.nutritionFacts?.allergen}</p>
              </footer>
            </main>
            <Review
              clickRewLiked={clickRewLiked}
              name={name}
              comment={comment}
              cmntList={cmntList}
              onChangeRew={onChangeRew}
              onKeyUpRew={onKeyUpRew}
              deleteRew={deleteRew}
            />
          </aside>
        </section>
      </main>
    );
  }
}
export default withRouter(DetailMain);
