import './Login.scss';
import React, { Component } from 'react';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      id: '',
      pw: '',
      buttonColor: false,
    };
  }

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
    this.ChangeButtonColor();
  };

  ChangeButtonColor = () => {
    let buttonCondition =
      this.state.id.includes('@') && this.state.pw.length > 8;
    buttonCondition
      ? this.setState({ buttonColor: true })
      : this.setState({ buttonColor: false });
  };

  goToLogin = () => {
    this.props.history.push('/list-jisue');
  };

  render() {
    return (
      <div className="Login">
        <div id="mainLogin">
          <div id="mainForm">
            <h1>JiBucks</h1>
            <input
              className="boxTotalCSS"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              name="id"
              onChange={this.handleInput}
            />
            <input
              className="boxTotalCSS"
              type="password"
              placeholder="비밀번호"
              name="pw"
              onChange={this.handleInput}
            />
            <button
              id="loginButton"
              className={
                this.state.buttonColor ? 'boxTotalCSS active' : 'boxTotalCSS'
              }
              onClick={this.goToLogin}
            >
              로그인
            </button>
            <a href="www.naver.com">비밀번호를 잊으셨나요?</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
