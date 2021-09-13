import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import DetailFooter from './DetailFooter';
import DetailMain from './DetailMain';
import './Detail.scss';

class Detail extends Component {
  constructor() {
    super();
    this.state = {
      isLiked: 0,
      isRewLiked: 0,
      mainData: [],
      footerData: [],
      name: '',
      comment: '',
      cmntList: [
        {
          id: 1,
          name: '위코드!',
          comment: '리뷰를 입력해라!',
          isRewLiked: false,
        },
      ],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/listData.json')
      .then(res => res.json())
      .then(data => {
        const listId = this.props.location.state?.id;
        let mainData = data['LIST_MENU'].find(el => listId === el.id);
        if (!mainData) mainData = data[0];
        this.setState({
          footerData: data['FOOTER_MENU'],
          isLiked: mainData.isLiked,
          mainData,
        });
      });
  }

  clickLiked = () => {
    const { isLiked } = this.state;
    this.setState({
      isLiked: !isLiked,
    });
  };

  clickRewLiked = e => {
    console.log(e);
    const cmntList = this.state.cmntList.find(el => el.id !== e.target.keyCode);
    console.log(cmntList);
    this.setState({
      isRewLiked: !cmntList.isRewLiked,
    });
  };

  onChangeRew = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onKeyUpRew = e => {
    if (e.keyCode === 13 && this.state.name && this.state.comment) {
      const { name, comment, cmntList, isRewLiked } = this.state;
      this.setState({
        cmntList: [
          ...cmntList,
          {
            id: cmntList.length ? cmntList[cmntList.length - 1].id + 1 : 1,
            name,
            comment,
            isRewLiked,
          },
        ],
        name: '',
        comment: '',
      });
    }
  };

  deleteRew = id => {
    const cmntList = this.state.cmntList.filter(el => el.id !== id);
    this.setState({ cmntList });
  };

  render() {
    const { mainData, footerData, isLiked, name, comment, cmntList } =
      this.state;
    return (
      <div className="Detail">
        <div id="total">
          <div id="sub">
            <Nav />
          </div>
          <DetailMain
            mainData={mainData}
            isLiked={isLiked}
            clickLiked={this.clickLiked}
            clickRewLiked={this.clickRewLiked}
            name={name}
            comment={comment}
            cmntList={cmntList}
            onChangeRew={this.onChangeRew}
            onKeyUpRew={this.onKeyUpRew}
            deleteRew={this.deleteRew}
          />
          <DetailFooter footerData={footerData} />
        </div>
      </div>
    );
  }
}

export default Detail;
