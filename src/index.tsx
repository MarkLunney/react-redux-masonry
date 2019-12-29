import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

import thunkMiddleware from "redux-thunk";
import { createStore, applyMiddleware } from "redux";

import React from "react";
import ReactDOM from "react-dom";
import Root from "./containers/Root";
import * as serviceWorker from "./serviceWorker";
import rootReducer from "./reducers";

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

ReactDOM.render(<Root store={store} />, document.getElementById("root"));

serviceWorker.unregister();
