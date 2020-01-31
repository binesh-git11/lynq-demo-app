import { applyMiddleware, compose, createStore } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension";

import reducers from "./reducers"

const middleware = applyMiddleware(
	thunk, 
)

export default createStore(
	reducers, 
	compose(
    	middleware,
    	window.devToolsExtension ? composeWithDevTools() : f => f,
  	)
);