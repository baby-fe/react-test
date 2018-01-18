import React from 'react'
import { combineReducers } from 'redux'
import { Route } from 'react-router'
import nReducer from '../redux/reducer'
import {STATE_KEY} from '../redux/constant'

//异步加载test模块，重置store
const testLoader = (store, nextState, cb) => {
    /* webpackChunkName: 'Test' */
    const originState = store.getState()
    const newStore = originState['test'] ? {...originState} : {...originState,[STATE_KEY]: {}}
    import('../').then(module => {
        store.reset(combineReducers({...store._reducers,[STATE_KEY]: nReducer}), newStore)
        cb(null, module.default);
    })
}
export default store => {
    return <Route key='test' path='/test' getComponent={(nextState, cb) => {testLoader(store, nextState, cb)}}/>
}