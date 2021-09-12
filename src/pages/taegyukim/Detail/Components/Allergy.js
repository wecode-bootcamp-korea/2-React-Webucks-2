import React from 'react';
import './Allergy.scss';

class Allergy extends React.Component {
  render() {
    const { allergen } = this.props;

    return (
      <div>
        <div className="allergy">
          <span>{'알레르기 유발 요인 : ' + allergen}</span>
        </div>
      </div>
    );
  }
}

export default Allergy;
