import {getDetail} from '../actionType'
import Immutable from 'immutable';
import {post} from '@/service'
import goods from '@/mock/goodDetail'

export const setDetail = (res) => ({
	type: getDetail,
	data: Immutable.fromJS(res)
});

export const getProducts = (par) => (dispatch, getState) => {
	dispatch(setDetail(goods));
}