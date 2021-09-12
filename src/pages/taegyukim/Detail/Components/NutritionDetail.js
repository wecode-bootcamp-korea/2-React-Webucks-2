import React from 'react';
import './NutritionDetail.scss';

class NutritionDetail extends React.Component {
  render() {
    const { nutritionFacts } = this.props;

    return (
      <div className="nutritionDetail">
        <table>
          <tbody>
            <tr>
              <th>1회 제공량 (kcal)</th>
              <td className="dotBorder">{nutritionFacts.kcal}</td>
              <th>나트륨 (mg)</th>
              <td>{nutritionFacts.natrium}</td>
            </tr>
            <tr>
              <th>포화지방 (g)</th>
              <td className="dotBorder">{nutritionFacts.fat}</td>
              <th>당류 (g)</th>
              <td>{nutritionFacts.sugars}</td>
            </tr>
            <tr>
              <th>단백질 (g)</th>
              <td className="dotBorder">{nutritionFacts.protein}</td>
              <th>카페인 (mg)</th>
              <td>{nutritionFacts.caffeine}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default NutritionDetail;
