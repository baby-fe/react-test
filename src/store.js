import {
    applyMiddleware,
    compose,
    createStore
} from 'redux'
import {
    routerMiddleware,
    routerReducer
} from 'react-router-redux'
import thunkMiddleware from 'redux-thunk'
import {
    combineReducers
} from 'redux-immutable';
import resetEnhancer from './enhancer/reset.js';
import reducerHome from '@/containers/home/reducers/reducer-home'
import {
    reducerLogin
} from '@/common/reducers'
import {
    key_home,
    key_login
} from '@/constants'
/**
 * @param  {state}
 * @param  {history}
 * @return {store}
 */
export default (immu_initialState, history) => {
    // const asyncReducers  = require.context('../containers', true, /^\.\/\S+\/redux\/reducer\.js$/)
    // console.log('reds:',asyncReducers)
    const middleware = [thunkMiddleware, routerMiddleware(history)];
    const originalReducers = {
        routing: routerReducer,
        [key_home]: reducerHome,
        [key_login]: reducerLogin
    }
    // const enhancers = [];
    const storeEnhancers = compose(resetEnhancer, applyMiddleware(...middleware), (window && window.devToolsExtension) ? window.devToolsExtension() : (f) => f)
    const store = createStore(combineReducers(originalReducers), immu_initialState, storeEnhancers);
    store._reducers = originalReducers;
    return store;
}