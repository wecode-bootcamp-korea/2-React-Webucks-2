import React from 'react';
export const CoffeeContext = React.createContext();

class CoffeeContextContainer extends React.Component {
  constructor() {
    super();
    this.state = { wonderCoffees: [], freshCoffees: [] };
  }

  updateById = (id, layoutName) => {
    const db = this.findDbByName(layoutName);
    const newData = this.updateHeartData(db, id);
    this.setState({ [layoutName]: newData });
  };

  updateHeartData(db, id) {
    const newData = [];
    for (let item of db) {
      if (item.id === id) item.isLike = !item.isLike;
      newData.push(item);
    }
    return newData;
  }

  findHeartById = (id, layoutName) => {
    const db = this.findDbByName(layoutName);
    const data = db.find(item => item.id === id);
    if (data) return data.isLike;
  };

  findDbByName(name) {
    const {
      state: { wonderCoffeeList, freshCoffeeList },
    } = this;
    return name === 'wonderCoffeeList' ? wonderCoffeeList : freshCoffeeList;
  }

  componentDidMount() {
    fetch('/data/data.json')
      .then(res => res.json())
      .then(data => {
        const wonderCoffeeList = data.wonderCoffeeList.map(item => {
          item.isLike = false;
          return item;
        });

        const freshCoffeeList = data.freshCoffeeList.map(item => {
          item.isLike = false;
          return item;
        });
        this.setState({ freshCoffeeList, wonderCoffeeList });
      });
  }

  render() {
    const {
      findHeartById,
      updateById,
      props: { children },
      state: { wonderCoffeeList, freshCoffeeList },
    } = this;
    return (
      <CoffeeContext.Provider
        value={{ wonderCoffeeList, freshCoffeeList, updateById, findHeartById }}
      >
        {children}
      </CoffeeContext.Provider>
    );
  }
}

export default CoffeeContextContainer;
