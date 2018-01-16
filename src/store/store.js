import { applyMiddleware, compose, createStore ,combineReducers} from 'redux'
import { routerMiddleware,routerReducer  } from 'react-router-redux'
import thunkMiddleware from 'redux-thunk'
import { makeRootReducer } from '@/reducers/reducer'
import resetEnhancer from '../enhancer/reset.js';

export default (initialState = {}, history) => {

    // const asyncReducers  = require.context('../containers', true, /^\.\/\S+\/redux\/reducer\.js$/)
    // console.log('reds:',asyncReducers)
    const middleware = [thunkMiddleware, routerMiddleware(history)];
    const originalReducers = {
        routing: routerReducer
    }

    // const enhancers = [];
    const storeEnhancers = compose(
        resetEnhancer,
        applyMiddleware(...middleware),
        (window && window.devToolsExtension) ? window.devToolsExtension() : (f) => f
    )
    const store = createStore(
        combineReducers(originalReducers),
        initialState,
        storeEnhancers
    );
    console.log('originalReducers:',originalReducers)
    store._reducers = originalReducers;
    return store;
}