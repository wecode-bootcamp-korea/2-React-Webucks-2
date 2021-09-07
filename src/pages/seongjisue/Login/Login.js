import React, { Component } from 'react';
import './Login.scss';

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
    const { name, value } = e.target;
    this.setState({ [name]: value });
    this.changeButtonColor();
  };

  changeButtonColor = () => {
    const { id, pw } = this.state;
    let isValid = id.includes('@') && pw.length > 8;
    this.setState({ buttonColor: isValid });
  };

  goToLogin = () => {
    if (this.state.buttonColor) {
      this.props.history.push('/list-jisue');
    }
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
