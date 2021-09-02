import React from 'react';
import './Input.scss';

//클레스에서 함수 처럼 특정 prop을 무시하는 방법 없을까?  무슨 타입 스크립도 아니고... ㅠ에러 게속뜨네. 작동은 하니 뭐... ㅠ
class Input extends React.Component {
  render() {
    return (
      <div className="Input">
        <input
          className={this.props.isValid ? 'green' : null}
          value={this.props.value}
          ref={this.props.rref}
          {...this.props}
          onChange={e => {
            this.props.set(e.target.value);
          }}
        />
      </div>
    );
  }
}

export default Input;
