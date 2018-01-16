import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'


export const makeRootReducer = asyncReducers => {
	console.log('asyncReducers:',asyncReducers)
  return combineReducers({
    routing: routerReducer,
    ...asyncReducers
  })
}

export const injectReducer = (store, {key, reducer}) => {

  if(!store.asyncReducers[key]) {
    store.asyncReducers[key] = reducer;
  	console.log('key:',store.asyncReducers[key])
    store.replaceReducer(makeRootReducer(store.asyncReducers));
    console.log('store:',store.getState())
  }
}