import React, { useEffect, useState } from 'react';
import CoffeeLayout from './Components/CoffeeListLayout/CoffeeListLayout';
import CoffeCard from './Components/CoffeeCard/CoffeCard';
import { data1, data2 } from '../data';
import Nav from '../CommonComponents/Nav/Nav';

function List() {
  const [db1, setDb1] = useState([]);
  const [db2, setDb2] = useState([]);
  useEffect(() => {
    setDb1(
      data1.map((item, id) => {
        item.isGetHeart = false;
        item.id = id;
        return item;
      })
    );

    setDb2(
      data2.map((item, id) => {
        item.isGetHeart = false;
        item.id = id;
        return item;
      })
    );
  }, []);

  return (
    <div className="List">
      <Nav />
      <CoffeeLayout>
        {db1.map(({ img, title, isGetHeart, id }, index) => {
          return (
            <CoffeCard
              imgUrl={img}
              coffeeName={title}
              isGetHeart={isGetHeart}
              id={id}
              key={index}
              setDb={setDb1}
              db={db1}
            />
          );
        })}
      </CoffeeLayout>
      <CoffeeLayout>
        {db2.map(({ img, title, id }, index) => {
          return (
            <CoffeCard
              imgUrl={img}
              coffeeName={title}
              isGetHeart={false}
              index={id}
              key={index}
              setDb={setDb2}
              db={db2}
            />
          );
        })}
      </CoffeeLayout>
    </div>
  );
}

export default List;
