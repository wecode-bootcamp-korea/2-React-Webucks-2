import React from 'react';
import './Login.scss';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      inputId: '',
      inputPw: '',
    };
  }

  handleIdPwInput = event => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  };

  moveToList = () => {
    this.props.history.push('/list-kichul');
  };

  render() {
    const { handleIdPwInput, moveToList } = this;
    const isValid =
      this.state.inputId.indexOf('@') >= 0 && this.state.inputPw.length > 7;

    return (
      <div className="Login">
        <section className="loginall">
          <h1>WeBucks</h1>
          <form>
            <input
              id="namemail"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              name="inputId"
              onChange={handleIdPwInput}
            />
            <input
              id="pwput"
              type="password"
              placeholder="비밀번호"
              name="inputPw"
              onChange={handleIdPwInput}
            />
            <button
              className={isValid ? 'valid' : 'invalid'}
              id="logbtn"
              disabled={isValid ? null : 'disabled'}
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
