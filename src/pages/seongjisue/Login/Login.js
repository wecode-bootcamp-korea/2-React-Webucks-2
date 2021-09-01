import './Login.scss';
import React, { Component } from 'react';

class Login extends Component {
  goToLogin = () => {
    this.props.history.push('/list-jisue');
  };
  render() {
    return (
      <div className="Login">
        <div id="mainLogin">
          <form
            id="mainForm"
            onSubmit={function (e) {
              e.preventDefault();
              this.props.history.push('/list');
            }.bind(this)}
          >
            <h1>JiBucks</h1>
            <input
              className="boxTotalCSS"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
            <input
              className="boxTotalCSS"
              type="password"
              placeholder="비밀번호"
            />
            <button
              id="loginButton"
              className="boxTotalCSS"
              onClick={this.goToLogin}
            >
              로그인
            </button>
            <a href="www.naver.com">비밀번호를 잊으셨나요?</a>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
