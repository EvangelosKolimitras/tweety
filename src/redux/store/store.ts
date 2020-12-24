import { createStore, applyMiddleware } from 'redux'
import reducersCombined from '../reducers/index'
import logger from 'redux-logger'

export const store = createStore(reducersCombined(), applyMiddleware(logger))