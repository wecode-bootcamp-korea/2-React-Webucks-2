import CoffeeLayout from './Components/CoffeeListLayout/CoffeeListLayout';
import CoffeCard from './Components/CoffeeCard/CoffeCard';
import Nav from '../CommonComponents/Nav/Nav';
import React from 'react';
import { CoffeeContext } from '../../../Context';

class List extends React.Component {
  static contextType = CoffeeContext;

  render() {
    const {
      context: { db1, db2, updateById },
    } = this;
    return (
      <div className="List">
        <Nav />
        <CoffeeLayout>
          {db1.map(item => {
            return (
              <CoffeCard
                layoutName={'db1'}
                item={item}
                key={item.id}
                updateById={updateById}
              />
            );
          })}
        </CoffeeLayout>
        <CoffeeLayout>
          {db2.map(item => {
            return (
              <CoffeCard
                layoutName={'db2'}
                item={item}
                key={item.id}
                updateById={updateById}
              />
            );
          })}
        </CoffeeLayout>
      </div>
    );
  }
}

export default List;
