import {DOADD} from './constant'
import {post} from '@/service'

export const strEdit = (str) => ({
	type: DOADD,
	val: str
});

const saveData = (url,par) => ({
	type: DOADD,
	url: url,
	param: par
});

export const getData = (par) => (dispatch, getState) => {
	post('/ygg-hqbs/homePage/greateSale30').then(res => {
		console.log("res:",res)
	})
} 