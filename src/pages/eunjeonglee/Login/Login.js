import React from 'react';
import '../../../styles/common.scss';
import '../../../styles/reset.scss';
import './Login.scss';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      id: '',
      password: '',
      logIn: false,
    };
  }

  handleInput = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleLoginBtn = event => {
    const id = this.state.id;
    const password = this.state.password;
    if (id.includes('@') && password.length >= 5) {
      this.setState({
        logIn: true,
      });
    } else {
      this.setState({
        logIn: false,
      });
    }
  };
  render() {
    return (
      <body className="Login">
        <section className="contents">
          <h1 id="title">WeBucks</h1>
          <form id="loginForm">
            <input
              name="id"
              onChange={this.handleInput}
              onKeyUp={this.handleLoginBtn}
              className="loginInput"
              id="userId"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
            <input
              name="password"
              onChange={this.handleInput}
              onKeyUp={this.handleLoginBtn}
              className="loginInput"
              id="password"
              type="password"
              placeholder="비밀번호"
            />
            <button
              className={this.state.logIn ? 'logInBtn' : 'logOutBtn'}
              id="btn"
            >
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
