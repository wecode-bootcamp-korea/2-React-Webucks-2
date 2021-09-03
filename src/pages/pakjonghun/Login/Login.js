import { faCoins } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../CommonComponents/Input/Input';
import Form from './Form';
import './Login.scss';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: '', pw: '', pwType: false };
    this.changeId = this.changeId.bind(this);
    this.changePw = this.changePw.bind(this);
  }
  btnRef = React.createRef();

  idValid(val) {
    return val.includes('@');
  }

  pwValid(val) {
    return val.length >= 5;
  }

  changeId(val) {
    this.setState(() => ({ id: val }));
  }

  changePw(val) {
    this.setState(() => ({ pw: val }));
  }

  componentDidUpdate() {
    if (this.idValid(this.state.id) && this.pwValid(this.state.pw)) {
      this.btnRef.current.classList.add('active');
    } else {
      this.btnRef.current.classList.remove('active');
    }
  }

  render() {
    return (
      <div className="Login">
        <section className="loginContainer">
          <Form
            isValid={this.idValid(this.state.id) && this.pwValid(this.state.pw)}
          >
            <h1 className="title">WeBucks</h1>

            <Input
              value={this.state.id}
              set={this.changeId}
              className={`idInput ${
                this.idValid(this.state.id) ? 'green' : null
              } `}
              isValid={this.idValid(this.state.id)}
              type={'string'}
              placeholder={'ID나 이메일을 입력하세요'}
            />

            <div
              className={`pwInput ${
                this.pwValid(this.state.pw) ? 'green' : null
              }`}
            >
              <Input
                value={this.state.pw}
                set={this.changePw}
                type={this.state.pwType ? 'text' : 'password'}
                placeholder="비밀번호를 입력하세요"
              />
              <span
                className="passwordIcon"
                onClick={() => {
                  this.setState({ ...this.state, pwType: !this.state.pwType });
                }}
              >
                <FontAwesomeIcon icon={faCoins} />
              </span>
            </div>

            <Input
              rref={this.btnRef}
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
}

export default Login;
