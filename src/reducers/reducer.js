import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'


export const makeRootReducer = asyncReducers => {
	console.log('routerReducer:',routerReducer)
  return combineReducers({
    routing: routerReducer,
    ...asyncReducers
  })
}

export const injectReducer = (store, {key, reducer}) => {

  if(!store.asyncReducers[key]) {
  	console.log('key:',store.asyncReducers[key])
    store.asyncReducers[key] = reducer;
    store.replaceReducer(makeRootReducer(store.asyncReducers));
  }
}