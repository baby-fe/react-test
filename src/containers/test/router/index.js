import React from 'react'
import { combineReducers } from 'redux'
import { Route } from 'react-router'
// import { injectReducer } from '@/reducers/reducer'
export default store => {
    return <Route key='test'
        path='/test' 
        getComponent={
            (nextState, cb) => {
                import('../'/* webpackChunkName: 'Test' */)
                .then(module => {
                    // injectReducer(store, {key: 'test', reducer: require('../redux/reducer')});
                    store.reset(combineReducers({
                        ...store._reducers,
                        test: require('../redux/reducer')
                    }), {
                        ...store.getState(),
                        'test': {}
                    })
                    cb(null, module.default);
                    console.log('store:',store)
                })
            }
        }/>
}