import React from 'react';
import './NutritionTitle.scss';

class NutritionTitle extends React.Component {
  render() {
    const { servingSize } = this.props;

    return (
      <div className="nutritionTitle">
        <span>제품 영양 정보</span>
        <span>{servingSize}</span>
      </div>
    );
  }
}

export default NutritionTitle;
