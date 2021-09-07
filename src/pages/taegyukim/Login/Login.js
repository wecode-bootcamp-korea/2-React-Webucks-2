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
    const { value } = event.target;
    const { userInfo } = this.state;
    this.setState({
      userInfo: {
        ...userInfo,
        id: value,
      },
    });
  };

  handlePwInput = event => {
    const { value } = event.target;
    const { userInfo } = this.state;
    this.setState({
      userInfo: {
        ...userInfo,
        pw: value,
      },
    });
  };

  render() {
    const { handleIdInput, handlePwInput, handleButtonColor, goToList } = this;
    const { id, pw } = this.state.userInfo;
    const isValid = id.includes('@') && pw.length >= 5;
    return (
      <div className="Login">
        <div className="form">
          <header className="header">WeBucks</header>
          <form className="userInfo" onKeyUp={handleButtonColor}>
            <input
              onChange={handleIdInput}
              className="user"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
            <input
              onChange={handlePwInput}
              className="password"
              type="password"
              placeholder="비밀번호"
            />
            <button
              id="loginBtn"
              className={isValid ? 'active' : 'remove'}
              onClick={goToList}
              disabled={isValid ? null : 'disabled'}
            >
              로그인
            </button>
          </form>
          <p className="forgetPws">비밀번호를 잊으셨나요?</p>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
