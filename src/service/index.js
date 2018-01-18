const formDataCode = (data)=>{
    let str = '';
    for(let i in data){
      if(data.hasOwnProperty(i)){
        str = str + i +"=" +data[i] + '&';
      }
    }
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

let param = {},
param.method = 'get'
param.cache = 'reload';
param.mode = 'same-origin';

export const request = (url, data, option = {}) => {
  data = data || {};
	swicth (method){
		case 'get':
			return get(url,data,{...param,...option});
			break;
		case 'post':
			return post(url,data,{...param,...option});
			break;
		default:
      return get(url,data,{...param,...option});
			break;
	}
	
}

//todo
export const get = (url, data, option = {}) => {
  if (data) {
    url = url+'?'+formDataCode(data)
  }
  return new Promise(function (resolve, reject) {
   fetch(url, {
      ...param
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
      reject({status:-1});
     })
  })
}

export const post = (url, data, option = {}) => {
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
      reject({status:-1});
     })
  })
}