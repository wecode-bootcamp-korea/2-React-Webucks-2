import React from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      id: '',
      pw: '',
    };
  }

  handleInput = ev => {
    const { value, name } = ev.target;
    this.setState({
      [name]: value,
    });
  };

  goToList = () => {
    this.props.history.push('/list-jihyun');
  };

  render() {
    const { handleLoginBtn, handleInput, goToList } = this;
    const isValid = this.state.id.includes('@') && this.state.pw.length >= 5;

    return (
      <div className="Login">
        <div className="loginBox">
          <h1 className="logo">Webucks</h1>
          <form onKeyUp={handleLoginBtn} className="loginInput">
            <input
              onChange={handleInput}
              className="idInput"
              name="id"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
            <input
              onChange={handleInput}
              className="pwInput"
              name="pw"
              type="password"
              placeholder="비밀번호"
            />
            <button
              onClick={goToList}
              className={isValid ? 'loginButton active' : 'loginButton'}
              disabled={isValid ? false : true}
            >
              로그인
            </button>
          </form>
          <Link to="/login-jihyun">
            <p>비밀번호를 잊으셨나요?</p>
          </Link>
        </div>
      </div>
    );
  }
}

export default Login;
