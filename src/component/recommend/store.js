import { observable, action, runInAction, useStrict, computed, extendObservable } from 'mobx';
import { $http, Qs } from '../../tools';

useStrict(true);


class Recommend {

	@observable bannerImg = '';

	@action 
	getBanner() {
         /*console.log($http)*/
	    $http.get('http://192.168.5.18:10001/banner').then((res) => {
	      if(res.code && res.code== '200'){
	        runInAction(()=>{
	        	bannerImg = res.banners;
	        })
	      }else{
	        
	      }
	    }, e => {
	      /*console.log(e, 'err')*/
	      
	    });
	}
}


export default new Recommend();