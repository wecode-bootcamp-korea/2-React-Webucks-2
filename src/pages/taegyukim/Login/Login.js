import React from 'react';
import { withRouter } from 'react-router-dom';
import './Login.scss';

class Login extends React.Component {
  goToList = () => {
    this.props.history.push('/list-taegyu');
  };
  render() {
    return (
      <div className="Login">
        <div className="form">
          <header className="header">WeBucks</header>
          <form className="userInfo">
            <input
              className="user"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
            <input
              className="password"
              type="password"
              placeholder="비밀번호"
            />
            <button className="loginBtn" onClick={this.goToList}>
              로그인
            </button>
          </form>
          <a className="forgetPws">비밀번호를 잊으셨나요?</a>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
