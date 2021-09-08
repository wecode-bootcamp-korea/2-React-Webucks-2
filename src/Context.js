import React from 'react';
export const CoffeeContext = React.createContext();

class CoffeeContextContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { db1: [], db2: [] };
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
      state: { db1, db2 },
    } = this;
    return name === 'db1' ? db1 : db2;
  }

  componentDidMount() {
    fetch('/data/data.json')
      .then(res => res.json())
      .then(data => {
        const db1 = data.data1.map(item => {
          item.isLike = false;
          return item;
        });

        this.setState({ db1 });

        const db2 = data.data2.map(item => {
          item.isLike = false;
          return item;
        });
        this.setState({ db2 });
      });
  }

  render() {
    const {
      findHeartById,
      updateById,
      props: { children },
      state: { db1, db2 },
    } = this;

    return (
      <CoffeeContext.Provider value={{ db1, db2, updateById, findHeartById }}>
        {children}
      </CoffeeContext.Provider>
    );
  }
}

export default CoffeeContextContainer;
