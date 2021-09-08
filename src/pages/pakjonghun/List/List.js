import CoffeeLayout from './Components/CoffeeListLayout/CoffeeListLayout';
import CoffeCard from './Components/CoffeeCard/CoffeCard';
import Nav from '../CommonComponents/Nav/Nav';
import React from 'react';
import { CoffeeContext } from '../../../Context';

class List extends React.Component {
  static contextType = CoffeeContext;

  render() {
    const {
      context: { wonderCoffeeList, freshCoffeeList, updateById },
    } = this;
    return (
      <div className="List">
        <Nav />
        <CoffeeLayout>
          {wonderCoffeeList.map(item => {
            return (
              <CoffeCard
                layoutName={'wonderCoffeeList'}
                item={item}
                key={item.id}
                updateById={updateById}
              />
            );
          })}
        </CoffeeLayout>
        <CoffeeLayout>
          {freshCoffeeList.map(item => {
            return (
              <CoffeCard
                layoutName={'freshCoffeeList'}
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
