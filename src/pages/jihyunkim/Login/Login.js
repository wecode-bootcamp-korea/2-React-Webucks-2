import React from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      id: '',
      pw: '',
      isActive: false,
    };
  }
  handleInput = ev => {
    const { value, name } = ev.target;
    this.setState({
      [name]: value,
    });
  };

  handleLoginBtn = () => {
    const isValid = this.state.id.includes('@') && this.state.pw.length >= 8;
    this.setState({ isActive: isValid ? true : false });
  };

  goToList = () => {
    if (this.state.isActive) {
      this.props.history.push('/list-jihyun');
    }
  };

  render() {
    return (
      <div class="Login">
        <div className="loginBox">
          <h1 className="logo">Webucks</h1>
          <form onKeyUp={this.handleLoginBtn} className="loginInput">
            <input
              onChange={this.handleInput}
              className="idInput"
              name="id"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
            <input
              onChange={this.handleInput}
              className="pwInput"
              name="pw"
              type="password"
              placeholder="비밀번호"
            />
            <button
              onClick={this.goToList}
              className={
                this.state.isActive ? 'loginButton active' : 'loginButton'
              }
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
