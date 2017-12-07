import { observable, action, runInAction, useStrict, computed, extendObservable } from 'mobx';
import { $http, Qs } from '../../tools';

useStrict(true);

class Recommend {

  @observable bannerImgs = [];
	@observable songList = [];

	@action getBanner = () => {
    $http.get('/banner').then((res) => {
      if(res.code && res.code== '200'){
        runInAction(()=>{
        	this.bannerImgs = res.banners;
        })
      }else{
        
      }
    }, e => {
      /*console.log(e, 'err')*/
    });
	}

  @action getSongList = () =>{
    $http.get('/personalized').then((res) =>{
      if(res.code && res.code == '200'){
        runInAction(() =>{
          this.songList = res.result;
        })
      }
    })
  }

}


export default new Recommend();