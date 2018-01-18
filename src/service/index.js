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
			}else if(response.errcode == 40001){
				throw "token失效，请刷新页面"
			}else if(response.errcode == -1){
				return response
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
	return fetch(url,params).then(callback).catch(errHandle);
}