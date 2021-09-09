import React, { Component } from 'react';

class DetailFooter extends Component {
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
