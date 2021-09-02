import { faCoins } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react/cjs/react.development';
import Input from '../CommonComponents/Input/Input';
import Form from './Form';
import './Login.scss';

function Login() {
  const btnRef = useRef();

  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [pwType, setpwType] = useState(false);

  useEffect(() => {
    if (idValid(id) && pwValid(pw)) {
      btnRef.current.classList.add('active');
    } else {
      btnRef.current.classList.remove('active');
    }
  }, [id, pw]);

  return (
    <div className="Login">
      <section className="loginContainer">
        <Form isValid={idValid(id) && pwValid(pw)}>
          <h1 className="title">WeBucks</h1>

          <Input
            value={id}
            set={setId}
            className={`idInput ${idValid(id) ? 'green' : null} `}
            isValid={idValid(id)}
            type={'string'}
            placeholder={'ID나 이메일을 입력하세요'}
          />

          <div className={`pwInput ${pwValid(pw) ? 'green' : null}`}>
            <Input
              value={pw}
              set={setPw}
              isValid={pwValid(id)}
              type={`${pwType ? 'text' : 'password'}`}
              placeholder="비밀번호를 입력하세요"
            />
            <span className="passwordIcon" onClick={() => setpwType(!pwType)}>
              <FontAwesomeIcon icon={faCoins} />
            </span>
          </div>

          <Input
            rref={btnRef}
            className="loginSubmit"
            type="submit"
            placeholder="비밀번호를 입력하세요"
            value="로그인"
          />

          <Link to="#">비밀번호를 잊으셨나요</Link>
        </Form>
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

export default Login;
