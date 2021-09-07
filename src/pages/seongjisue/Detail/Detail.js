import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import DtlFooter from './DtlFooter';
import DtlMain from './DtlMain';
import './Detail.scss';

class Detail extends Component {
  render() {
    return (
      <div className="Detail">
        <div id="total">
          <div id="sub">
            <Nav />
          </div>
          <DtlMain />
          <DtlFooter />
        </div>
      </div>
    );
  }
}

export default Detail;
