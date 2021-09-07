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
    const isValid =
      this.state.inputId.indexOf('@') >= 0 && this.state.inputPw.length > 7;
    this.setState({ isIdPwValid: isValid });
  };

  moveToList = () => {
    if (this.state.isIdPwValid) {
      this.props.history.push('/list-kichul');
    }
  };
  render() {
    const { handleIdInput, handlePwInput, moveToList } = this;
    const { isIdPwValid } = this.state;
    return (
      <div className="Login">
        <section class="loginall">
          <h1>WeBucks</h1>
          <form>
            <input
              id="namemail"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              onChange={handleIdInput}
            />
            <input
              id="pwput"
              type="password"
              placeholder="비밀번호"
              onChange={handlePwInput}
            />
            <button
              className={isIdPwValid ? 'valid' : 'invalid'}
              id="logbtn"
              disabled={isIdPwValid ? null : 'disabled'}
              onClick={moveToList}
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
