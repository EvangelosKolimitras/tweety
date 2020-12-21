import { createStore, combineReducers } from 'redux'
import { usersReducer } from '../reducers/index'


const store = createStore(combineReducers({ users: usersReducer }))