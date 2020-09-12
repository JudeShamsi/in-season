import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

const initialState = {};

const middleware = composeWithDevTools(
    applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
  )

const store = createStore(rootReducer, middleware)

// const store = createStore(rootReducer, initialState, compose(
//     window._REDUX_DEVTOOLS_EXTENSION_ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
// ));

export default store;