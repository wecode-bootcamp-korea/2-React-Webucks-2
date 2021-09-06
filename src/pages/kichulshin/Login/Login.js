import React from 'react';
import './Login.scss';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      inputId: '',
      inputPw: '',
      isIdPwValid: false,
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
          isIdPwValid: true,
        })
      : this.setState({
          isIdPwValid: false,
        });
  };

  moveToList = () => {
    if (this.state.isIdPwValid) {
      this.props.history.push('/list-kichul');
    }
  };
  render() {
    return (
      <div className="Login">
        <section class="loginall">
          <h1>WeBucks</h1>
          <form>
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
              className={this.state.isIdPwValid ? 'valid' : 'invalid'}
              id="logbtn"
              disabled={this.state.isIdPwValid ? null : 'disabled'}
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
