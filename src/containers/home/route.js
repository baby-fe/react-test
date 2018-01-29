import React from 'react'
import { combineReducers } from 'redux'
import { Route } from 'react-router'
import nReducer from './reducer'
import { key_home } from '@/constant'

const loader = (store, nextState, cb, module) => {
	const originState = store.getState()
    const newStore = originState[key_home] ? {...originState} : {...originState,[key_home]: {}}
    store.reset(combineReducers({...store._reducers,[key_home]: nReducer}), newStore)
        cb(null, module.default);
}
//异步加载test模块，重置store
const homeLoader = (store, nextState, cb) => {
    /* webpackChunkName: 'Test' */
    import('../index').then(module => {
        loader(store, nextState, cb, module)
    })
}



export default store => {
    return <Route key='_home' path='/home' getComponent={(nextState, cb) => {homeLoader(store, nextState, cb)}}/>

}