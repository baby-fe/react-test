const formDataCode = (data)=>{
    let str = '';
    for(let i in data){
      if(data.hasOwnProperty(i)){
        str = str + i +"=" +data[i] + '&';
      }
    }
    str = str.slice(0, str.length-1)
    return str;
  }

  // const callback = (res)=>{
  //   res.json().then(response=>{
  //     if(!response){
  //       throw '服务器返回参数错误'
  //     }
  //     return response;
  //   })
  // }

  // const errHandle = (res)=>{
  //   if(res.errcode == -1){
  //     alert(res.errmsg)
  //   }
  // }
const API_PATH = '/api'
let param = {}
param.method = 'get'
param.cache = 'reload';
param.mode = 'same-origin';

export const request = (url, data, option = {}) => {
  data = data || {};
  url = API_PATH + url;
	switch (option&&option.method){
		case 'get':
			return get(url,data,{...param,...option});
		case 'post':
			return post(url,data,{...param,...option});
		default:
      return get(url,data,{...param,...option});
	}
	
}

//todo
export const get = (url, data, option = {}) => {
  url = API_PATH + url;
  if (data) {
    url = url+'?'+formDataCode(data)
  }
  return new Promise(function (resolve, reject) {
   fetch(url, {
      ...param,
      ...option,
      method: 'GET'
     })
     .then((response) => {
       if (response.ok) {
         return response.json();
       } else {
         reject({status:response.status})
       }
     }).then((response) => {
       resolve(response);
     }).catch((err)=> {
      console.log('err:',err)
      reject({status:-1});
     })
  })
}

export const post = (url, data, option = {}) => {
  url = API_PATH + url;
  return new Promise(function (resolve, reject) {
   fetch(url, {
      ...param,
      ...option,
      method: 'POST',
      headers: {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'},
      body:formDataCode(data),
     }).then((response) => {
       if (response.ok) {
         return response.json();
       } else {
         reject({status:response.status})
       }
     }).then((response) => {
       resolve(response);
     }).catch((err)=> {
      console.log('err:',err)
      reject({status:-1});
     })
  })
}