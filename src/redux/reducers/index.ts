import { combineReducers } from 'redux'

import { usersReducer } from './users'
import { tweetsReducer } from './tweets'
import { authUserReducer } from './authUser'

export { usersReducer } from './users'
export { tweetsReducer } from './tweets'
export { authUserReducer } from './authUser'

const reducersCombined: Function = (): Function => combineReducers({
	users: usersReducer,
	tweets: tweetsReducer,
	authUser: authUserReducer
})

export default reducersCombined