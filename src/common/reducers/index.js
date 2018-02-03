import {login} from '../actionType'
import {
  createReducer
} from 'redux-create-reducer';
import Immutable from 'immutable';
import {
    key_login
} from '@/constants'

const initialState = Immutable.fromJS({});

const userlogin = (domain, action) => {
	console.log('domain:',domain)
  return domain;
};

export const reducerLogin = createReducer(initialState, {
  [login]:userlogin
});