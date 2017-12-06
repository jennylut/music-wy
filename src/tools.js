import axios from 'axios';

export const Qs = () => {
	var sStr = window.location.href,
	    params = {};
	var pattern = /(\w+)=([^&#]*)*/g;
	var arr = sStr.match(pattern);
	if(arr){
		for(var i = 0; i < arr.length; i++){
		    var kv = arr[i].split('=');
		    params[kv[0]] = kv[1];
		  }
	}
	return params;
	console.log(params); 
}
const params = Qs();
const $http = axios.create({
	timeout:60000,
	headers: {
		'X-Requested-With': 'XMLHttpRequest',
		'mobilePhone': params.mobilePhone,
        'deviceId': params.deviceId,
        'sessionid': params.sessionid || params.sessionId,
	}
});

$http.interceptors.response.use(response => {
    return response.data;
}, error => {
    return Promise.reject(error);
});

export {$http}