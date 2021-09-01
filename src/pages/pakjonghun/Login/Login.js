import React, { useState, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useEffect } from 'react/cjs/react.development';
import Input from '../CommonComponents/Input/Input';
import './Login.scss';

function Login() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const btnRef = useRef();
  const idRef = useRef();
  const pwRef = useRef();
  const history = useHistory();

  useEffect(() => {
    idRef.current.addEventListener('input', () =>
      validHandler(idRef, pwRef, btnRef)
    );
    pwRef.current.addEventListener('input', () =>
      validHandler(idRef, pwRef, btnRef)
    );

    return () => {
      if (idRef.current && pwRef.current) {
        idRef.current.removeEventListener('input', () =>
          validHandler(idRef, pwRef, btnRef)
        );
        pwRef.current.removeEventListener('input', () =>
          validHandler(idRef, pwRef, btnRef)
        );
      }
    };
  }, []);

  return (
    <div className="Login">
      <section className="loginContainer">
        <form
          className="loginForm"
          onSubmit={e => {
            e.preventDefault();
            history.push('/list-jonghun');
          }}
        >
          <h1 className="title">WeBucks</h1>
          <Input
            className="loginId"
            onChange={e => setId(e.target.value)}
            value={id}
            type="string"
            placeholder="ID나 이메일을 입력하세요"
            reff={idRef}
          />
          <Input
            className="loginPw"
            onChange={e => setPw(e.target.value)}
            value={pw}
            type="password"
            placeholder="비밀번호를 입력하세요"
            reff={pwRef}
          />
          <Input
            className="loginSubmit"
            type="submit"
            placeholder="비밀번호를 입력하세요"
            value="로그인"
            reff={btnRef}
          />
          <Link to="#">비밀번호를 잊으셨나요</Link>
        </form>
      </section>
    </div>
  );
}

function idValid(val) {
  return val.includes('@');
}

function pwValid(val) {
  return val.length >= 8;
}

function inputStyleChanger(ref, isCorrect) {
  if (isCorrect) {
    ref.current.classList.add('green');
  } else {
    ref.current.classList.remove('green');
  }
}

function buttonStyleChanger(ref, isCorrect) {
  if (isCorrect) {
    ref.current.classList.add('active');
  } else {
    ref.current.classList.remove('active');
  }
}

function validHandler(idRef, pwRef, btnRef) {
  const idCorrect = idValid(idRef.current.value);
  const pwCorrect = pwValid(pwRef.current.value);

  inputStyleChanger(idRef, idCorrect);
  inputStyleChanger(pwRef, pwCorrect);
  buttonStyleChanger(btnRef, idCorrect && pwCorrect);
}

export default Login;
