import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  NavLink as Link,
  Redirect
} from 'react-router-dom'

import ReactSwipe from 'react-swipe';

 export default class Recommend extends Component {
	render(){
		return (
	  	<div className="content">
         <ReactSwipe className="carousel" swipeOptions={{continuous: false}}>
                <div className="swipe-item">
                  <img src="" alt=""/>
                </div>
                <div className="swipe-item">
                  <img src="" alt=""/>
                </div>
                <div className="swipe-item">
                  <img src="" alt=""/>
                </div>
          </ReactSwipe>
      </div>
		)
	}
}