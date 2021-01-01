import { combineReducers } from 'redux'
import { usersReducer } from './users'
import { tweetsReducer } from './tweets'
import { authUserReducer } from './authUser'
import { loadingBarReducer } from 'react-redux-loading'

export { usersReducer } from './users'
export { tweetsReducer } from './tweets'
export { authUserReducer } from './authUser'

const reducersCombined = () => combineReducers({
	users: usersReducer,
	tweets: tweetsReducer,
	authUser: authUserReducer,
	loadingBar: loadingBarReducer
})

export default reducersCombined