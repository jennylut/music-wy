import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  NavLink as Link,
  Redirect
} from 'react-router-dom'
import { inject, observer } from 'mobx-react';



@inject('SongListDetail')
@observer
 export default class SongListDetail extends Component {
  componentDidMount(){
    this.props.SongListDetail.getPlayList();
  }

  render(){
    console.log(123);
    const { playlist ,playlistCreator ,songList} = this.props.SongListDetail;
   
    return (
      <div className="content-s">
        <div className="header-box">
          <a href="javascript:history.back()" className="back-btn"></a>
          <div className="name">歌单详情</div>
        </div>
        <div className="song-list-detail">
          <div className="details-box">
            <div className="text-box">
              <div className="img-box">
                <span className="com-nums">{playlist.playCount}</span>
                <img src={playlist.coverImgUrl} alt=""/>
              </div>
              <div className="author-box">
                <p>{playlist.name}</p>
                <p>
                  <img src={playlistCreator.avatarUrl} className="nick-img" alt=""/>
                  <span className="nick-name">{playlistCreator.nickname}</span>
                </p>
              </div>
            </div>
          </div>
          <div className="search-list">
          {
            songList.map((item,index) => {
              return <a href={`/play?id=${item.id}`} className="search-item" key={index}>
                      <div>
                        <p className="name">{item.name}</p>
                        <p className="details">
                          {item.ar[0].name}-{item.al.name}
                        </p>
                      </div>
                      <div className="play-mark"></div>
                    </a>
            })
          }
          
            
          </div>
        </div>  

      </div>
    )
  }
}

