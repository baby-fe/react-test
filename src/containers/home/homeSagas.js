import { takeEvery, takeLatest, take, call, put, fork, race } from 'redux-saga/effects'
import Immutable from 'immutable';
import {getData,getPros} from './actionType'
import {post} from '@/service'

function* getDetail(){
    while (true) {
        const action = yield take(getData)
        const res = yield call(fetchData,{url:`/ygg-hqbs/homePage/greateSale30`})
        yield put({type:getData,data:Immutable.fromJS(res)})
    }
}

function* getProducts(){
	while(true){
		const action = yield take(getPros)
        const res = yield call(fetchData,{url:`/ygg-hqbs/homePage/recommend`})
        yield put({type:getPros,data:Immutable.fromJS(res)})
	}
}
/**
 * async fetch
 * @param {[type]} param         [description]
 * @yield {[type]} [description]
 */
function* fetchData(param){
	const response = yield post(param.url,param.data)
	return response
}

export default function* homeSagas () {
  	yield fork(getDetail)
  	yield fork(getProducts)
}