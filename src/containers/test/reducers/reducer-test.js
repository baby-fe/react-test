import {getData} from './actionType'
import {
  createReducer
} from 'redux-create-reducer';
import Immutable from 'immutable';

const initialState = Immutable.fromJS([]);

const initHome = (domain, action) => {
  return domain
    .merge(action.data);
};

export default createReducer(initialState, {
  [getData]:initHome
});