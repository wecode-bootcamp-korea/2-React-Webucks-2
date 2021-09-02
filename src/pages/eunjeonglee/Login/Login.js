import React from 'react';
import '../../../styles/common.scss';
import '../../../styles/reset.scss';
import './Login.scss';

class Login extends React.Component {
  render() {
    return (
      <body className="Login">
        <section className="contents">
          <h1 id="title">WeBucks</h1>
          <form id="loginForm">
            <input
              className="loginInput"
              id="userId"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
            <input
              className="loginInput"
              id="password"
              type="password"
              placeholder="비밀번호"
            />
            <button className="loginBtn" id="btn">
              로그인
            </button>
          </form>
          <a id="forgotPw" href="www.naver.com">
            비밀번호를 잊으셨나요?
          </a>
        </section>
      </body>
    );
  }
}

export default Login;
