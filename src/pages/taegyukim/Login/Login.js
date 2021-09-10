import React from 'react';
import { withRouter } from 'react-router-dom';
import './Login.scss';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      id: '',
      pw: '',
    };
  }

  goToList = () => {
    this.props.history.push('/list-taegyu');
  };

  signup = () => {
    const { id, pw } = this.state;
    fetch('/users/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: id,
        password: pw,
      }),
    })
      .then(response => response.json())
      .then(result => console.log(result));
  };

  login = () => {
    const { id, pw } = this.state;
    fetch('/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: id,
        password: pw,
      }),
    })
      .then(response => response.json())
      .then(result => {
        console.log(result);
        if (result.token) this.goToList();
      });
  };

  handleInput = event => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { handleInput, handleButtonColor, signup, login } = this;
    const { id, pw } = this.state;
    const isValid = id.includes('@') && pw.length >= 5;

    return (
      <div className="Login">
        <div className="form">
          <header className="header">WeBucks</header>
          <div className="userInfo" onKeyUp={handleButtonColor}>
            <input
              onChange={handleInput}
              className="user"
              name="id"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
            <input
              onChange={handleInput}
              className="password"
              name="pw"
              type="password"
              placeholder="비밀번호"
            />
            <button
              id="loginBtn"
              className={isValid ? 'active' : 'remove'}
              onClick={signup}
              disabled={isValid ? false : true}
            >
              회원가입
            </button>
            <button
              id="loginBtn"
              className={isValid ? 'active' : 'remove'}
              onClick={login}
              disabled={isValid ? false : true}
            >
              로그인
            </button>
          </div>
          <p className="forgetPws">비밀번호를 잊으셨나요?</p>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
