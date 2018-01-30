import React from 'react'
import { combineReducers } from 'redux'
import { Route } from 'react-router'
import { reducerHome } from '../reducers'
import { key_home } from '@/constant'

const loader = (store, nextState, cb, module, key, rdcr) => {
	const originState = store.getState()
    const newStore = originState[key] ? {...originState} : {...originState,[key]: {}}
    store.reset(combineReducers({...store._reducers,[key]: rdcr}), newStore)
        cb(null, module.default);
}
//异步加载test模块，重置store
const homeLoader = (store, nextState, cb) => {
    /* webpackChunkName: 'Test' */
    import('./views/index').then(module => {
        loader(store, nextState, cb, module,key_home,reducerHome)
    })
}

export default store => {
    return <Route key='_home' path='/home' getComponent={(nextState, cb) => {homeLoader(store, nextState, cb)}}/>

}