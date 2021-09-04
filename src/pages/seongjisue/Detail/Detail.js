import './Detail.scss';
import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import DetailFooter from './DetailFooter';
import { FOOTER_MENU as FooterData } from '../../../data/detailData';
import DetailMiddle from './DetailMiddle';

class Detail extends Component {
  render() {
    return (
      <div className="Detail">
        <div id="total">
          <div id="sub">
            <Nav></Nav>
          </div>
          <DetailMiddle></DetailMiddle>
          <DetailFooter value={FooterData}></DetailFooter>
        </div>
      </div>
    );
  }
}

export default Detail;
