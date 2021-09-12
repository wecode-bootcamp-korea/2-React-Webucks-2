import React from 'react';
import TopNav from '../../../components/TopNav/TopNav';
import CoffeeList from './Components/CoffeeList';
import './List.scss';

class List extends React.Component {
  constructor() {
    super();
    this.state = {
      firstProducts: [],
      secondProducts: [],
    };
  }

  componentDidMount() {
    fetch('/data/listData.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          firstProducts: data.FIRST_DATA,
          secondProducts: data.SECOND_DATA,
        });
      });
  }

  render() {
    const { firstProducts, secondProducts } = this.state;

    return (
      <div className="List">
        <TopNav />
        <section className="listMain">
          <CoffeeList products={firstProducts} />
          <CoffeeList products={secondProducts} />
        </section>
      </div>
    );
  }
}

export default List;
