import React from 'react';
import './Login.scss';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      inputId: '',
      inputPw: '',
      isIdPwActive: false,
    };
  }
  handleIdInput = event => {
    this.setState({ inputId: event.target.value }, this.checkValid);
  };

  handlePwInput = event => {
    this.setState({ inputPw: event.target.value }, this.checkValid);
  };

  checkValid = () => {
    this.state.inputId.indexOf('@') >= 0 && this.state.inputPw.length > 7
      ? this.setState({
          isIdPwActive: true,
        })
      : this.setState({
          isIdPwActive: false,
        });
  };

  moveToList = () => {
    if (this.state.isIdPwActive) {
      this.props.history.push('/List-kichul');
    }
  };
  render() {
    return (
      <div className="Login">
        <section class="loginall">
          <h1>WeBucks</h1>
          <form action="list.html">
            <input
              id="namemail"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              onChange={this.handleIdInput}
            />
            <input
              id="pwput"
              type="password"
              placeholder="비밀번호"
              onChange={this.handlePwInput}
            />
            <button
              className={this.state.isIdPwActive ? 'valid' : 'invalid'}
              id="logbtn"
              onClick={this.moveToList}
            >
              로그인
            </button>
          </form>
          <a href="http://naver.com">비밀번호를 잊으셨나요?</a>
        </section>
      </div>
    );
  }
}
export default Login;
