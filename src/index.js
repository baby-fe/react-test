import React from 'react'
import ReactDOM from 'react-dom'
import { Router, hashHistory,browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import createStore from './store/store'
import router from './routes/router'

let history = process.env.NODE_ENV !== 'production' ? browserHistory : hashHistory;

const store = createStore({}, history);
store.asyncReducers = {};
history = syncHistoryWithStore(history, store);

ReactDOM.render(
	<Provider store={store}>
        <Router history={history}>
          { router(store) }
        </Router>
    </Provider>,
	document.getElementById('root')
)