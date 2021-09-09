import React, { Component } from 'react';
import './Login.scss';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      id: '',
      pw: '',
    };
  }

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value }, this.changeButtonColor);
  };

  changeIdColor = () => {
    const { id } = this.state;
    let isValid = id.includes('@');
    return isValid;
  };

  changePwColor = () => {
    const { pw } = this.state;
    let isValid = pw.length > 8;
    return isValid;
  };

  changeButtonColor = () => {
    const { id, pw } = this.state;
    let isValid = id.includes('@') && pw.length > 8;
    return isValid;
  };

  goToLogin = () => {
    if (this.changeButtonColor()) {
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
              className={
                this.changeIdColor()
                  ? 'boxTotalCSS inputBox input inputColorChange'
                  : 'boxTotalCSS inputBox'
              }
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              name="id"
              onChange={this.handleInput}
            />
            <input
              className={
                this.changePwColor()
                  ? 'boxTotalCSS inputBox input inputColorChange'
                  : 'boxTotalCSS inputBox'
              }
              type="password"
              placeholder="비밀번호"
              name="pw"
              onChange={this.handleInput}
            />
            <button
              id="loginButton"
              className={
                this.changeButtonColor() ? 'boxTotalCSS active' : 'boxTotalCSS'
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
