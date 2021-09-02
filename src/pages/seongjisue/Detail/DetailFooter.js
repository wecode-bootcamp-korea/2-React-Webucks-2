import React, { Component } from 'react';

class DetailFooter extends Component {
  render() {
    return (
      <footer id="footer">
        <div className="footerList">
          {this.props.value.map(data => {
            return (
              <ul className="footerMenu">
                <li id="footerTitle">{data.title}</li>
                {data.menu.map(dataM => {
                  return <li>{dataM}</li>;
                })}
              </ul>
            );
          })}
        </div>
      </footer>
    );
  }
}

export default DetailFooter;
