import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunkMiddleware from 'redux-thunk'
import { makeRootReducer } from '@/reducers/reducer'

export default (initialState = {}, history) => {

    const asyncReducers  = require.context('../containers', true, /reducer$/)
    console.log('reds:',asyncReducers)
    const middleware = [thunkMiddleware, routerMiddleware(history)];
    const enhancers = [];
    const store = createStore(
        makeRootReducer(asyncReducers),
        initialState,
        //redux调试代码
        window.devToolsExtension && window.devToolsExtension(),
        compose(
            applyMiddleware(...middleware),
            ...enhancers
        )
    );
    return store;
}