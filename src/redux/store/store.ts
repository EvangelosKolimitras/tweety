import { createStore } from 'redux'
import reducersCombined from '../reducers/index'

const store = createStore(reducersCombined)