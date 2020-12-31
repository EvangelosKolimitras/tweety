import { getInitialData } from "../../services/index"
import { receiveTweets } from "./tweets"
import { receiveUsers } from "./users"
import { setAuthUser } from "./authUser"
import { showLoading, hideLoading } from 'react-redux-loading'

export { RECEIVE_USERS } from "./users"
export { RECEIVE_TWEETS } from "./tweets"
export { SET_AUTH_USER } from "./authUser"

const AUTH_ID: string = "evan_kol"

export const handleInitialization = () => {
	return async (dispatch: Function): Promise<void> => {
		dispatch(showLoading())
		const { users, tweets } = await getInitialData();
		dispatch(receiveUsers(users))
		dispatch(receiveTweets(tweets))
		dispatch(setAuthUser(AUTH_ID))
		dispatch(hideLoading())
	}
}
