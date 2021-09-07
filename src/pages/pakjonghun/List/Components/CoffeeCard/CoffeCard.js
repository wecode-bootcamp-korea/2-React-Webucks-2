import React from 'react';
import Heart from '../../../CommonComponents/Heart/Heart';
import { Link } from 'react-router-dom';
import './CoffeeCard.scss';
import Photo from '../../../CommonComponents/Photo/Photo';

class CoffeCard extends React.Component {
  render() {
    const {
      props: { id, layoutName, img, name, isLike, updateById },
    } = this;

    return (
      <div className="CoffeeCard">
        <div className="imgContainer">
          <Link
            to={{
              pathname: `/detail-jonghun/${id}`,
              state: { data: { layoutName, img, name, isLike, id } },
            }}
          >
            <Photo className={'coffeeImg'} name={name} img={img} />
          </Link>
        </div>
        <div className="coffeeInfo">
          <Heart
            isLike={isLike}
            updateById={updateById}
            id={id}
            layoutName={layoutName}
          />
          <span className="coffeeName">{name}</span>
        </div>
      </div>
    );
  }
}

export default CoffeCard;
