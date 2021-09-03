import React from 'react';
import './Footer.scss';

class Footer extends React.Component {
  render() {
    return (
      <footer className="Footer">
        <div className="footerColumn">
          <span className="footerItem">COMPANY</span>
          <span className="footerItem">한눈에 보기</span>
          <span className="footerItem">스타벅스 사명</span>
          <span className="footerItem">스타벅스 소개</span>
          <span className="footerItem">국내 뉴스들</span>
          <span className="footerItem">세계의 스타벅스</span>
          <span className="footerItem">글로벌 뉴스룸</span>
        </div>
        <div className="footerColumn">
          <span className="footerItem">COMPRORATE SALES</span>
          <span className="footerItem">단체 및 기업 구매 안내</span>
        </div>
        <div className="footerColumn">
          <span className="footerItem">PARINTESHIP</span>
          <span className="footerItem">신규 및 입점 제의</span>
          <span className="footerItem">협력 고객사 등록 신청</span>
        </div>
        <div className="footerColumn">
          <span className="footerItem">ONLINE COMMUNITY</span>
          <span className="footerItem">페이스북</span>
          <span className="footerItem">트위터</span>
          <span className="footerItem">유튜브</span>
          <span className="footerItem">블로그</span>
          <span className="footerItem">인스타그램</span>
        </div>
        <div className="footerColumn">
          <span className="footerItem">RECRUIT</span>
          <span className="footerItem">채용 소개</span>
          <span className="footerItem">채용 지원하기</span>
        </div>
        <div className="footerColumn">
          <span className="footerItem">WEBUCKS</span>
        </div>
      </footer>
    );
  }
}

export default Footer;
