import React, { Component } from 'react';
import {
  Router,
  Route,
  NavLink as Link,
  Switch,
  Redirect
} from 'react-router-dom';
import './index.css';
import Home from "./component/home/home";
import SongListDetail from "./component/songListDetail/songListDetail";
import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory()

class App extends Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <Switch>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/songlistdetail" component={SongListDetail}/>
            <Redirect to="/home"/>
          </Switch>
        </Router>
      </div>);
  }
}

export default App;
