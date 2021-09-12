import React from 'react';
import TopNav from '../../../components/TopNav/TopNav';
import SecondNav from './Components/SecondNav';
import Title from './Components/Title';
import Description from './Components/Description';
import NutritionTitle from './Components/NutritionTitle';
import NutritionDetail from './Components/NutritionDetail';
import Allergy from './Components/Allergy';
import Review from './Components/Review';
import Footer from '../../../components/Footer/Footer';
import './Detail.scss';

class Detail extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      isRedHeart: false,
      reviewComment: '',
      reviewArray: [],
      products: {
        id: 0,
        name: '',
        category: '',
        imgUrl: '',
        engName: '',
        summary: '',
        nutritionFacts: [],
      },
    };
  }

  componentDidMount() {
    fetch('/data/detailData.json')
      .then(res => res.json())
      .then(data => {
        const item = data.find(dataObj => dataObj.id === 105);
        this.setState({
          products: item,
        });
      });
  }

  handleHeartColor = () => {
    const { isRedHeart } = this.state;
    this.setState({
      isRedHeart: !isRedHeart,
    });
  };

  handleReviewInput = event => {
    const { value } = event.target;
    this.setState({
      reviewComment: value,
    });
  };

  addReviewComment = event => {
    const { reviewArray, reviewComment, id } = this.state;
    if (event.key === 'Enter') {
      event.preventDefault();
      event.target.value = '';
      if (reviewComment !== '') {
        const newComment = {
          id: id + 1,
          comment: reviewComment,
          isLiked: false,
        };
        this.setState({
          id: id + 1,
          reviewComment: '',
          reviewArray: [...reviewArray, newComment],
        });
      }
    }
  };

  deleteReviewComment = id => {
    const { reviewArray } = this.state;
    this.setState({
      reviewArray: reviewArray.filter(comment => comment.id !== id),
    });
  };

  handleReviewBtnColor = id => {
    const { reviewArray } = this.state;
    const newReviewArray = [...reviewArray];
    for (let i = 0; i < newReviewArray.length; i++) {
      if (newReviewArray[i].id === id) {
        newReviewArray[i].isLiked = !newReviewArray[i].isLiked;
      }
    }
    this.setState({
      reviewArray: newReviewArray,
    });
  };

  render() {
    const { isRedHeart, reviewArray } = this.state;
    const { name, category, imgUrl, engName, summary, nutritionFacts } =
      this.state.products;
    const {
      handleHeartColor,
      deleteReviewComment,
      handleReviewInput,
      addReviewComment,
      handleReviewBtnColor,
    } = this;

    return (
      <div className="Detail">
        <TopNav />
        <SecondNav name={name} category={category} />
        <section className="detailMain">
          <article className="detailArticle">
            <img alt={name} src={imgUrl} />
            <div className="detailInfo">
              <Title
                isRedHeart={isRedHeart}
                name={name}
                engName={engName}
                handleHeartColor={handleHeartColor}
              />
              <Description summary={summary} />
              <NutritionTitle servingSize={nutritionFacts.servingSize} />
              <NutritionDetail nutritionFacts={nutritionFacts} />
              <Allergy allergen={nutritionFacts.allergen} />
              <Review
                reviewArray={reviewArray}
                deleteReviewComment={deleteReviewComment}
                handleReviewInput={handleReviewInput}
                addReviewComment={addReviewComment}
                handleReviewBtnColor={handleReviewBtnColor}
              />
            </div>
          </article>
        </section>
        <Footer />
      </div>
    );
  }
}

export default Detail;
