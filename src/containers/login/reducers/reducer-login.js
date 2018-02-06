import {login} from '../actionType'
import {
  createReducer
} from 'redux-create-reducer';
import Immutable from 'immutable';

const initialState = Immutable.fromJS({});

const userlogin = (domain, action) => {
	console.log(domain)
	domain.set('status',true)
	domain.set('username',action.get('name'))

  return domain;
};

export default createReducer(initialState, {
  [login]:userlogin
});