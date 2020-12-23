import { createStore } from 'redux'
import reducersCombined from '../reducers/index'

export const store = createStore(reducersCombined())