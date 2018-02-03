import {login} from '../actionType'
import {
  createReducer
} from 'redux-create-reducer';
import Immutable from 'immutable';

const initialState = Immutable.fromJS({});

const userlogin = (domain, action) => {
	console.log(action)
  return domain;
};

export default createReducer(initialState, {
  [login]:userlogin
});