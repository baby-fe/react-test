import {getData} from './actionType'
import {post} from '@/service'

export const home = (res) => ({
	type: getData,
	data: res
});

export const getData = (par) => (dispatch, getState) => {
	post('/ygg-hqbs/homePage/greateSale30').then(res => {
		console.log("res:",res)
		dispatch(home(res));
	})
} 