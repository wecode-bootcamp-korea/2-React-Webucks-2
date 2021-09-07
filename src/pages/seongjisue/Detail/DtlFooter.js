import React, { Component } from 'react';

class DtlFooter extends Component {
  constructor() {
    super();
    this.state = {
      dtlData: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/detailData.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          dtlData: data['FOOTER_MENU'],
        });
      });
  }

  render() {
    const { dtlData } = this.state;
    return (
      <footer id="footer">
        <div className="footerList">
          {dtlData.map(dtTitle => {
            return (
              <ul className="footerMenu">
                <li id="footerTitle">{dtTitle.title}</li>
                {dtTitle.menu.map(dtList => {
                  return <li className="footerMiddle">{dtList}</li>;
                })}
              </ul>
            );
          })}
        </div>
      </footer>
    );
  }
}

export default DtlFooter;
