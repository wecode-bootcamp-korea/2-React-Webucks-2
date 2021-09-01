import React from 'react';
import CoffeeLayout from './Components/CoffeeListLayout/CoffeeListLayout';
import CoffeCard from './Components/CoffeeCard/CoffeCard';
import { data1, data2 } from '../data';
import Nav from '../CommonComponents/Nav/Nav';

function List() {
  return (
    <div className="List">
      <Nav />
      <CoffeeLayout>
        {data1.map(({ img, title }, index) => {
          return (
            <CoffeCard
              imgUrl={img}
              coffeeName={title}
              isGetHeart={false}
              index={index}
              key={index}
            />
          );
        })}
      </CoffeeLayout>
      <CoffeeLayout>
        {data2.map(({ img, title }, index) => {
          return (
            <CoffeCard
              imgUrl={img}
              coffeeName={title}
              isGetHeart={false}
              index={index}
              key={index}
            />
          );
        })}
      </CoffeeLayout>
    </div>
  );
}

export default List;
