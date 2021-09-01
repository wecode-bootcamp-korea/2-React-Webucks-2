import React from 'react';
import '../../../styles/reset.scss';
import './Login.scss';

class Login extends React.Component {
  render() {
    return (
      <div class="Login">
        <div className="loginBox">
          <h1 className="logo">Webucks</h1>
          <form className="loginInput">
            <input
              className="idInput"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
            <input
              className="pwInput"
              type="password"
              placeholder="비밀번호"
              autocomplete="off"
            />
            <button className="loginButton" disabled>
              로그인
            </button>
          </form>
          <a href="">비밀번호를 잊으셨나요?</a>
        </div>
      </div>
    );
  }
}

export default Login;
