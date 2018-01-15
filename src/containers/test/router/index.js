import React from 'react'
import { Route } from 'react-router'
import { injectReducer } from '@/reducers/reducer'
export default store => {
    return <Route key='test'
        path='test' 
        getComponent={
            (nextState, cb) => {
                import('../'/* webpackChunkName: 'Test' */)
                .then(module => {
                    injectReducer(store, {key: 'test', reducer: require('../redux/reducer')});
                    cb(null, module.default);
                })
            }
        }/>
}