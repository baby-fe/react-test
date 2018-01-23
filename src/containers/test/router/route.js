import React,{Fragment} from 'react'
import { combineReducers } from 'redux'
import { Route } from 'react-router'
import nReducer from '../redux/reducer'
import { STATE_KEY } from '../redux/constant'

const loader = (store, nextState, cb, module) => {
	const originState = store.getState()
    const newStore = originState[STATE_KEY] ? {...originState} : {...originState,[STATE_KEY]: {}}
    store.reset(combineReducers({...store._reducers,[STATE_KEY]: nReducer}), newStore)
        cb(null, module.default);
}
//异步加载test模块，重置store
const testLoader = (store, nextState, cb) => {
    /* webpackChunkName: 'Test' */
    import('../index').then(module => {
        loader(store, nextState, cb, module)
    })
}

const innerLoader = (store, nextState, cb) => {
    /* webpackChunkName: 'Test' */
    import('../inner').then(module => {
        loader(store, nextState, cb, module)
    })
}

export default store => {
    return <Fragment key={Math.random()}>
    		<Route key='_test' path='/test' getComponent={(nextState, cb) => {testLoader(store, nextState, cb)}}/>
    		<Route key='_test_inner' path='/test/inner/:name' getComponent={(nextState, cb) => {innerLoader(store, nextState, cb)}}/>
    	</Fragment>

}
