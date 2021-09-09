import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import DetailFooter from './DetailFooter';
import DetailMain from './DetailMain';
import './Detail.scss';

class Detail extends Component {
  render() {
    return (
      <div className="Detail">
        <div id="total">
          <div id="sub">
            <Nav />
          </div>
          <DetailMain />
          <DetailFooter />
        </div>
      </div>
    );
  }
}

export default Detail;
