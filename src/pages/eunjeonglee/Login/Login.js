import React from 'react';
import '../../../styles/common.scss';
import '../../../styles/reset.scss';
import './Login.scss';

class Login extends React.Component {
  //input에서 onChange 발생
  // event -> handleIdInput 함수 실행
  // handleIdInput 은 이벤트를 인자로 받음
  //event가 일어난 요소에 담긴 밸루값(event.target.value)를 state에 저장
  // 위의 과정을 pw input에도 동일하게 적용
  // 위 순서대로 완료 후 Add: mission1 - 사용자 입력 데이터 저장 기능 구현 커밋 푸쉬
  constructor() {
    super();
    this.state = {
      id: '',
      password: '',
      logIn: false,
    };
  }

  handleInput = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
    console.log(this.state.id);
  };

  handleLoginBtn = event => {
    const id = this.state.id;
    const password = this.state.password;
    if (id.includes('@') && password.length >= 5) {
      this.setState({
        logIn: true,
      });
      console.log(this.state.logIn);
    } else {
      this.setState({
        logIn: false,
      });
      console.log(this.state.logIn);
      //console.log()∆∆
    }
  };

  render() {
    console.log(this.state);
    return (
      <body className="Login">
        <section className="contents">
          <h1 id="title">WeBucks</h1>
          <form id="loginForm">
            <input
              name="id"
              onChange={this.handleInput}
              onKeyUp={this.handleLoginBtn}
              className="loginInput"
              id="userId"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
            <input
              name="password"
              onChange={this.handleInput}
              onKeyUp={this.handleLoginBtn}
              className="loginInput"
              id="password"
              type="password"
              placeholder="비밀번호"
            />
            <button
              //onsubmit={this.preventdefault}
              className={this.state.logIn ? 'logInBtn' : 'logOutBtn'}
              id="btn"
            >
              로그인
            </button>
          </form>
          <a id="forgotPw" href="www.naver.com">
            비밀번호를 잊으셨나요?
          </a>
        </section>
      </body>
    );
  }
}

export default Login;
