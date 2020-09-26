import { createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers';
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';


const middleware = composeWithDevTools(
    applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
  )

const store = createStore(rootReducer, middleware)

export default store;