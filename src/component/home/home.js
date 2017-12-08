import React, { Component } from 'react';
import {
  Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Nav from '../common/nav';
import Recommend from '../recommend/recommend';
import SongList from '../songlist/songlist';
import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory();

export default class Home extends Component {
  render(){
    return (
      <div>
        <Nav key="1"/>
        <Router key="2" history={history}>
          <Switch>
            <Route exact path="/recommend" component={Recommend}/>
            <Route exact path="/songlist" component={SongList}/>
            <Redirect to="/recommend"/>
          </Switch>
        </Router> 
      </div>
    )
  }
}