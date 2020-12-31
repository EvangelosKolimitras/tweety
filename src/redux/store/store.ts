import { createStore, applyMiddleware } from 'redux'
import reducersCombined from '../reducers/index'
import { logger } from 'redux-logger'
import thunk from 'redux-thunk'
export const store = createStore(reducersCombined(), applyMiddleware(thunk, logger))

