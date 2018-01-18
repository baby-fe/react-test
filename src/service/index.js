export default const service = (url, option = {})=>{

	const formDataCode = (data)=>{
		let str = '';
		for(let i in data){
			if(data.hasOwnProperty(i)){
				str = str + i +"=" +data[i] + '&';
			}
		}
	}

	const callback = (res)=>{
		res.json().then(response=>{
			if(!response){
				throw '服务器返回参数错误'
			}
			return response;
		})
	}

	const errHandle = (res)=>{
		if(res.errcode == -1){
			alert(res.errmsg)
		}
	}

	let param = {},
	method = option.method || 'get'
	data = option.data || {};
	swicth (method){
		case 'get':
			url = url + (data ? '?' +formDataCode(data) : '');
			break;
		case 'post':
			params.headers= {};
			params.body = formDataCode(data);
			params.header['Content-Type' ] = "application/x-www-form-urlencoded; charset=UTF-8";
			break;
		default:
			break;
	}
	param.cache = 'reload';
	param.mode = 'same-origin';
	return fetch(url,params).then(callback).catch(errHandle);
}

//todo
const get = function(url, params, headers) {
  if (params) {
    let paramsArray = [];
    //encodeURIComponent
    Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
    if (url.search(/\?/) === -1) {
      url += '?' + paramsArray.join('&')
    } else {
      url += '&' + paramsArray.join('&')
    }
  }
  return new Promise(function (resolve, reject) {
   fetch(url, {
      method: 'GET',
      headers: headers,
     })
     .then((response) => {
       if (response.ok) {
         return response.json();
       } else {
         reject({status:response.status})
       }
     })
     .then((response) => {
       resolve(response);
     })
     .catch((err)=> {
      reject({status:-1});
     })
  })
}

const post = function(url, formData, headers) {
  return new Promise(function (resolve, reject) {
   fetch(url, {
      method: 'POST',
      headers: headers,
      body:formData,
     })
     .then((response) => {
       if (response.ok) {
         return response.json();
       } else {
         reject({status:response.status})
       }
     })
     .then((response) => {
       resolve(response);
     })
     .catch((err)=> {
      reject({status:-1});
     })
  })
}