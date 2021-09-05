import React from 'react';
import '../../../styles/reset.scss';
import './Login.scss';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      id: '',
      pw: '',
      isActive: false,
    };
  }

  handleIdInput = ev => {
    this.setState({
      id: ev.target.value,
    });
  };

  handlePwInput = ev => {
    this.setState({
      pw: ev.target.value,
    });
  };

  handleLoginBtn = () => {
    this.state.id.includes('@') && this.state.pw.length >= 5
      ? this.setState({ isActive: true })
      : this.setState({ isActive: false });
  };

  render() {
    return (
      <div class="Login">
        <div className="loginBox">
          <h1 className="logo">Webucks</h1>
          <form onKeyUp={this.handleLoginBtn} className="loginInput">
            <input
              onChange={this.handleIdInput}
              className="idInput"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
            <input
              onChange={this.handlePwInput}
              className="pwInput"
              type="password"
              placeholder="비밀번호"
            />
            <button
              className={
                this.state.isActive ? 'loginButton active' : 'loginButton'
              }
            >
              <Link to="/list-jihyun">로그인</Link>
            </button>
          </form>
          <a href="">비밀번호를 잊으셨나요?</a>
        </div>
      </div>
    );
  }
}

export default Login;
