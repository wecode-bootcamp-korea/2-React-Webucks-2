import { faCoins } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../CommonComponents/Input/Input';
import Form from '../CommonComponents/Form/Form';
import './Login.scss';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: '', pw: '', pwType: 'password' };
    this.onSubmit = this.onSubmit.bind(this);
    this.changeId = this.changeId.bind(this);
    this.changePw = this.changePw.bind(this);
  }

  changeId(e) {
    this.setState(() => ({ id: e.target.value }));
  }

  changePw(e) {
    this.setState(() => ({ pw: e.target.value }));
  }

  onSubmit() {
    if (this.state.id.includes('@') && this.state.pw.length >= 5)
      this.props.history.push('list-jonghun');
  }

  render() {
    return (
      <div className="Login">
        <section className="loginContainer">
          <Form callBack={this.onSubmit}>
            <h1 className="title">WeBucks</h1>

            <Input
              value={this.state.id}
              onChange={this.changeId}
              className={`idInput ${
                this.state.id.includes('@') ? 'green' : null
              } `}
              placeholder={'ID나 이메일을 입력하세요'}
            />

            <div
              className={`pwInput ${
                this.state.pw.length >= 5 ? 'green' : null
              }`}
            >
              <Input
                value={this.state.pw}
                onChange={this.changePw}
                type={this.state.pwType}
                placeholder="비밀번호를 입력하세요"
              />
              <span
                className="passwordIcon"
                onClick={() => {
                  if (this.state.pwType === 'password') {
                    this.setState({ pwType: 'text' });
                  } else {
                    this.setState({ pwType: 'password' });
                  }
                }}
              >
                <FontAwesomeIcon icon={faCoins} />
              </span>
            </div>

            <Input
              className={`loginSubmit ${
                this.state.id.includes('@') && this.state.pw.length >= 5
                  ? 'active'
                  : 'null'
              }`}
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
