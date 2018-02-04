import {login} from '../actionType'
import {
  createReducer
} from 'redux-create-reducer';
import Immutable from 'immutable';

const initialState = Immutable.fromJS({});

const userlogin = (domain, action) => {
	console.log('domain:',domain)
  return domain;
};

export const reducerLogin = createReducer(initialState, {
  [login]:userlogin
});