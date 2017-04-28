import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './containers/Root.jsx';
import { requestData } from './actions/data'
import rootReducer from './reducers'

const loggerMiddleware = createLogger()

const store = createStore(
	rootReducer,
	applyMiddleware(
		thunkMiddleware,
		loggerMiddleware
	)
)

ReactDOM.render(
	<Root store={store} />,
	document.getElementById('app')
);

store.dispatch(requestData()).then(() => {
	console.log(store.getState())
});