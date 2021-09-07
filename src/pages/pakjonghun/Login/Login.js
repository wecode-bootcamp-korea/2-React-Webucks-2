import React from 'react';
import { faCoins } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Form from '../CommonComponents/Form/Form';
import Input from '../CommonComponents/Input/Input';
import { Link } from 'react-router-dom';
import './Login.scss';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: '', pw: '', pwType: 'password', isValid: false };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    const {
      target: { value, name },
    } = e;

    this.setState({ [name]: value }, this.checkIsValid);
  }

  checkIsValid() {
    const {
      state: { id, pw },
    } = this;
    const isValid = id.includes('@') && pw.length >= 5;
    this.setState({ isValid });
  }

  onSubmit() {
    if (this.state.isValid) this.props.history.push('list-jonghun');
  }

  render() {
    const {
      onChange,
      onSubmit,
      state: { id, pw, pwType, isValid },
    } = this;

    return (
      <div className="Login">
        <section className="loginContainer">
          <Form callBack={onSubmit}>
            <h1 className="title">WeBucks</h1>

            <Input
              name="id"
              value={id}
              onChange={onChange}
              className={`idInput ${id.includes('@') ? 'green' : null} `}
              placeholder={'ID나 이메일을 입력하세요'}
            />

            <div className={`pwInput ${pw.length >= 5 ? 'green' : null}`}>
              <Input
                name="pw"
                value={pw}
                onChange={onChange}
                type={pwType}
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
                <FontAwesomeIcon icon={faCoins} className="changePwTypeBtn" />
              </span>
            </div>

            <Input
              className={`loginSubmit ${isValid ? 'active' : 'null'}`}
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
