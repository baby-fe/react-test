import {press} from '../actionType'
import Immutable from 'immutable';
import {post} from '@/service'

export const login = (name, psw) => ({
	type: press,
	data: Immutable.Map({name:name,psw:psw})
});