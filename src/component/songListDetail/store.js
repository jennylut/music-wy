import { observable, action, runInAction, useStrict, computed, extendObservable } from 'mobx';
import { $http, Qs } from '../../tools';

const params = Qs();

useStrict(true);

class SongListDetail {

  @observable playlist = {};
  @observable playlistCreator = {};
  @observable songList = [];

  @action getPlayList = () => {

    $http.get(`/playlist/detail?id=${params.id}`).then((res) => {
      if(res.code && res.code== '200'){
        runInAction(()=>{
          this.playlist = res.playlist || {};
          this.playlistCreator = res.playlist.creator || {};
          this.songList = res.playlist.tracks || [];
        })
      }else{
        
      }
    }, e => {
      /*console.log(e, 'err')*/
    });
  }


}


export default new SongListDetail();