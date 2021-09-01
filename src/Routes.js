import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// 태규's 컴포넌트
import LoginTae from './pages/taegyukim/Login/Login';
import ListTae from './pages/taegyukim/List/List';
import DetailTae from './pages/taegyukim/Detail/Detail';
// 은정's 컴포넌트
import LoginEun from './pages/eunjeonglee/Login/Login';
import ListEun from './pages/eunjeonglee/List/List';
import DetailEun from './pages/eunjeonglee/Detail/Detail';
// 지현's 컴포넌트
import LoginJi from './pages/jihyunkim/Login/Login';
import ListJi from './pages/jihyunkim/List/List';
import DetailJi from './pages/jihyunkim/Detail/Detail';
// 기철's 컴포넌트
import LoginKi from './pages/kichulshin/Login/Login';
import ListKi from './pages/kichulshin/List/List';
import DetailKi from './pages/kichulshin/Detail/Detail';
// 지수's 컴포넌트
import LoginSeong from './pages/seongjisue/Login/Login';
import ListSeong from './pages/seongjisue/List/List';
import DetailSeong from './pages/seongjisue/Detail/Detail';
// 종훈's 컴포넌트
import LoginPak from './pages/pakjonghun/Login/Login';
import ListPak from './pages/pakjonghun/List/List';
import DetailPak from './pages/pakjonghun/Detail/Detail';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login-taegyu" component={LoginTae} />
          <Route exact path="/list-taegyu" component={ListTae} />
          <Route exact path="/detail-taegyu" component={DetailTae} />

          <Route exact path="/login-eunjeong" component={LoginEun} />
          <Route exact path="/list-eunjeong" component={ListEun} />
          <Route exact path="/detail-eunjeong" component={DetailEun} />

          <Route exact path="/login-jihyun" component={LoginJi} />
          <Route exact path="/list-jihyun" component={ListJi} />
          <Route exact path="/detail-jihyun" component={DetailJi} />

          <Route exact path="/login-kichul" component={LoginKi} />
          <Route exact path="/list-kichul" component={ListKi} />
          <Route exact path="/detail-kichul" component={DetailKi} />

          <Route exact path="/login-jisue" component={LoginSeong} />
          <Route exact path="/list-jisue" component={ListSeong} />
          <Route exact path="/detail-jisue" component={DetailSeong} />

          <Route exact path="/login-jonghun" component={LoginPak} />
          <Route exact path="/list-jonghun" component={ListPak} />
          <Route exact path="/detail-jonghun" component={DetailPak} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
