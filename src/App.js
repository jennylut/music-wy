import React, { Component } from 'react';
import {
  Router,
  Route,
  NavLink as Link,
  Switch,
  Redirect
} from 'react-router-dom';
import './index.css';

import Nav from "./component/common/nav";
import Recommend from "./component/recommend/recommend";
import SongList from "./component/songlist/songlist";
import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory()

class App extends Component {
  render() {
    return [
      <Nav key="1"/>,
      <Router key="2" history={history}>
        <Switch>
          <Route exact path="/recommend" component={Recommend}/>
          <Route exact path="/songlist" component={SongList}/>
          <Redirect to="/recommend"/>
        </Switch>
      </Router>
    ];
  }
}

export default App;
