import React,{Fragment} from 'react'
import { combineReducers } from 'redux'
import { Route } from 'react-router'
import { reducerTest, reducerTestInner } from '../reducers'
import { key_test key_test_inner} from '../redux/constant'

const loader = (store, nextState, cb, module, key, rdcr) => {
    const originState = store.getState()
    const newStore = originState[key] ? {...originState} : {...originState,[key]: {}}
    store.reset(combineReducers({...store._reducers,[key]: rdcr}), newStore)
        cb(null, module.default);
}
//异步加载test模块，重置store
const testLoader = (store, nextState, cb) => {
    /* webpackChunkName: 'Test' */
    import('../index').then(module => {
        loader(store, nextState, cb, module, key_test, reducerTest)
    })
}

const innerLoader = (store, nextState, cb) => {
    /* webpackChunkName: 'Test' */
    import('../inner').then(module => {
        loader(store, nextState, cb, module, key_test_inner, reducerTestInner)
    })
}

export default store => {
    return <Fragment key={Math.random()}>
    		<Route key='_test' path='/test' getComponent={(nextState, cb) => {testLoader(store, nextState, cb)}}/>
    		<Route key='_test_inner' path='/test/inner/:name' getComponent={(nextState, cb) => {innerLoader(store, nextState, cb)}}/>
    	</Fragment>

}
