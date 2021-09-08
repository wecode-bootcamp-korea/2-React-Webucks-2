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
    this.state = { id: '', pw: '', pwType: 'password' };
  }

  onChange = e => {
    const {
      target: { value, name },
    } = e;
    this.setState({ [name]: value });
  };

  onSubmit = isValid => {
    if (isValid) this.props.history.push('list-jonghun');
  };

  checkValid = () => {
    const {
      state: { id, pw },
    } = this;
    return id.includes('@') && pw.length >= 5;
  };

  render() {
    const {
      checkValid,
      onChange,
      onSubmit,
      state: { id, pw, pwType },
    } = this;
    return (
      <div className="Login">
        <section className="loginContainer">
          <Form callBack={onSubmit} isValid={checkValid()}>
            <h1 className="title">WeBucks</h1>

            <Input
              name="id"
              value={id}
              onChange={onChange}
              className={`idInput ${id.includes('@') ? 'green' : ''} `}
              placeholder={'ID나 이메일을 입력하세요'}
            />

            <div className={`pwInput ${pw.length >= 5 ? 'green' : ''}`}>
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
                  if (pwType === 'password') {
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
              className={`loginSubmit ${checkValid() ? 'active' : ''}`}
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
