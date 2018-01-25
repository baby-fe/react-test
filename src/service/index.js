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

const API_PATH = '/api'
let param = {}
param.method = 'get'
param.cache = 'reload';
param.mode = 'same-origin';

export const request = (url, data, option = {}) => {
  return new Promise((resolve, reject) => {
    data = data || {};
    url = API_PATH + url;
  	switch (option&&option.method.toLocaleLowerCase()){
  		case 'get':
  			url = url+'?'+formDataCode(data);
        break;
  		case 'post':
        option.body = formDataCode(data);
  			option.headers = {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'};
        break;
  		default:
        url = url+'?'+formDataCode(data);
        break;
  	}

  	fetch(url,{...param,...option}).then(response => {
      if (response.ok) {
        return response.json();
      } else {
        reject({status:response.status})
      }
    }).then(response => {
      resolve(response);
    }).catch(err => {
      console.log('err:',err)
      reject({status:-1});
    })
  })
}

//todo
export const get = (url, data, option = {}) => {
  return request(url,data,{...option,method:'get'});
}

export const post = (url, data, option = {}) => {
  return request(url,data,{...option,method:'post'});
}
//for simple demo, update with redux-saga||redux-observable