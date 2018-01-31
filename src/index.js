import React from 'react'
import ReactDOM from 'react-dom'
import { Router, hashHistory,browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import createStore from './store'
import router from './router'
import FastClick from 'fastclick'

// 全局处理移动端 onclick 事件的延迟 300 ms 问题
FastClick.attach(document.body)

let history = process.env.NODE_ENV !== 'production' ? browserHistory : hashHistory;

const store = createStore({}, history);
store.asyncReducers = {};
const selectLocationState = (state) => {
	return state.get('routing')
}
history = syncHistoryWithStore(history, store, {selectLocationState});

ReactDOM.render(
	<Provider store={store}>
        <Router history={history}>
          { router(store) }
        </Router>
    </Provider>,
	document.getElementById('root')
)