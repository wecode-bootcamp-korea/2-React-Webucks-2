import React from 'react';
import { withRouter } from 'react-router-dom';
import './Login.scss';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      userInfo: { id: '', pw: '' },
    };
  }

  goToList = () => {
    this.props.history.push('/list-taegyu');
  };

  handleIdInput = event => {
    this.setState({
      userInfo: {
        ...this.state.userInfo,
        id: event.target.value,
      },
    });
  };

  handlePwInput = event => {
    this.setState({
      userInfo: {
        ...this.state.userInfo,
        pw: event.target.value,
      },
    });
  };

  render() {
    return (
      <div className="Login">
        <div className="form">
          <header className="header">WeBucks</header>
          <form className="userInfo" onKeyUp={this.handleButtonColor}>
            <input
              onChange={this.handleIdInput}
              className="user"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
            <input
              onChange={this.handlePwInput}
              className="password"
              type="password"
              placeholder="비밀번호"
            />
            <button
              id="loginBtn"
              className={
                this.state.userInfo.id.includes('@') &&
                this.state.userInfo.pw.length >= 5
                  ? 'active'
                  : 'remove'
              }
              onClick={this.goToList}
              disabled={
                this.state.userInfo.id.includes('@') &&
                this.state.userInfo.pw.length >= 5
                  ? null
                  : 'disabled'
              }
            >
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
