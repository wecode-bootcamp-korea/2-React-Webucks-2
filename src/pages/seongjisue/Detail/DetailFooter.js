import React, { Component } from 'react';

class DetailFooter extends Component {
  render() {
    const { footerData } = this.props;
    return (
      <footer id="footer">
        <div className="footerList">
          {footerData.map(dtTitle => {
            return (
              <ul className="footerMenu" key={dtTitle.id}>
                <li id="footerTitle">{dtTitle.title}</li>
                {dtTitle.menu.map((dtList, index) => {
                  return (
                    <li className="footerMiddle" key={index}>
                      {dtList}
                    </li>
                  );
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
