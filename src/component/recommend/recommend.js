import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  NavLink as Link,
  Redirect
} from 'react-router-dom'
import { inject, observer } from 'mobx-react';
import { Swiper, Slide } from 'react-dynamic-swiper';
import 'react-dynamic-swiper/lib/styles.css';


@inject('Recommend')
@observer
 export default class Recommend extends Component {
  componentDidMount(){
    this.props.Recommend.getBanner();
    this.props.Recommend.getSongList();
  }

	render(){
    const { bannerImgs, songList } = this.props.Recommend;
		return (
      document.getElementById('app'),
	  	<div className="content">
        <Swiper
        swiperOptions={{
          slidesPerView: 'auto',
        }}
        >
        {bannerImgs.map((slide,index) => (
         <Slide  key={index}>
            <img src={slide.pic} alt=""/>
          </Slide>
        ))}
      </Swiper>
      <div className="recommend-nav">
        <a href="javascript:;" className="recommend-item">
          <img src={require('../../images/fm.png')}  alt="" className="recommend-top"/>
          <p>私人FM</p>
        </a>
        <a href="javascript:;">
          <span className="recommend-number">16</span>
          <p>每日歌曲推荐</p>
        </a>
        <a href="javascript:;">
          <img src={require('../../images/hot.gif')} alt="" className="recommend-top"/>
          <p>正在播放</p>
        </a>
      </div>
      <div className="recommend-box">
        <div className="h2">
          <span>推荐歌单</span>
          <a href="javascript:;" className="more-btn">更多</a>
        </div>
        <div className="song-list">
          {
            songList.map((item,index)=>{
              <a href="javascript:;" className="song-items" key={index}>
                <img className="song-img" src={item.picUrl} alt=""/>
                <p className="songs-der com-two-overflow">{item.name}</p>
            </a>
            })
          }
        </div>
      </div>

      </div>
		)
	}
}

