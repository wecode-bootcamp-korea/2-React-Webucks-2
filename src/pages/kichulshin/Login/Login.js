import React from 'react';
import './Login.scss';
import { Link } from 'react-router-dom';

class Login extends React.Component {
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
            />
            <input id="pwput" type="password" placeholder="비밀번호" />
            <Link to="./List-kichul">
              <button id="logbtn">로그인</button>
            </Link>
          </form>
          <a href="http://naver.com">비밀번호를 잊으셨나요?</a>
        </section>
      </div>
    );
  }
}

export default Login;
