import {getDetail} from '../actionType'
import Immutable from 'immutable';
import {post} from '@/service'
import goods from '@/mock/goodDetail'

export const setDetailAction = (res) => ({
	type: getDetail,
	data: Immutable.fromJS(res)
});

export const getProDetailAction = (id) => ({
	type: getDetail,
	data: id
});