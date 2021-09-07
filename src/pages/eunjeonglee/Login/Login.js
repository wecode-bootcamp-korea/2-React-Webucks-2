import React from 'react';
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
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  isValid = event => {
    const { id, password } = this.state;
    const isValidLogIn = id.includes('@') && password.length >= 5;
    this.setState({
      logIn: isValidLogIn,
    });
  };

  goToList = () => {
    if (this.state.logIn === true) {
      this.props.history.push('/list-eunjeong');
    }
  };

  render() {
    const { handleInput, isValid, goToList, state } = this;
    return (
      <div className="Login">
        <section className="contents">
          <h1 id="title">WeBucks</h1>
          <form id="loginForm">
            <input
              name="id"
              onChange={handleInput}
              className="loginInput"
              id="userId"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
            <input
              name="password"
              onChange={handleInput}
              onKeyUp={isValid}
              className="loginInput"
              id="password"
              type="password"
              placeholder="비밀번호"
            />
            <button
              onClick={goToList}
              className={state.logIn ? 'logInBtn' : 'logOutBtn'}
              id="btn"
            >
              로그인
            </button>
          </form>
          <a id="forgotPw" href="www.naver.com">
            비밀번호를 잊으셨나요?
          </a>
        </section>
      </div>
    );
  }
}

export default Login;
