import React from 'react';
import './Footer.scss';

class Footer extends React.Component {
  render() {
    return (
      <footer className="bottomFooter">
        <div>
          <h6>COMPANY</h6>
          <ul>
            <li>한눈에 보기</li>
            <li>위벅스 사명</li>
            <li>위벅스 소개</li>
            <li>국내 뉴스룸</li>
            <li>세계의 위벅스</li>
            <li>글로블 뉴스룸</li>
          </ul>
        </div>
        <div>
          <h6>CORPORATE SALES</h6>
          <ul>
            <li>단체 및 기업 구매 안내</li>
          </ul>
        </div>
        <div>
          <h6>PARTNERSHIP</h6>
          <ul>
            <li>신규 입점 제의</li>
            <li>협력 고객사 등록 신청</li>
          </ul>
        </div>
        <div>
          <h6>ONLINE COMMUNITY</h6>
          <ul>
            <li>페이스북</li>
            <li>트위터</li>
            <li>유튜브</li>
            <li>블로그</li>
            <li>인스타그램</li>
          </ul>
        </div>
        <div>
          <h6>RECRUIT</h6>
          <ul>
            <li>채용 소개</li>
            <li>채용 지원하기</li>
          </ul>
        </div>
        <div>
          <h6>WEBUCKS</h6>
        </div>
      </footer>
    );
  }
}

export default Footer;
