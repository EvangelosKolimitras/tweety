import { createStore, applyMiddleware } from 'redux'
import reducersCombined from '../reducers/index'
import thunk from 'redux-thunk'

export const store = createStore(reducersCombined(), applyMiddleware(thunk))

