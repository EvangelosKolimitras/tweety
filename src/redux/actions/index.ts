export { RECEIVE_USERS } from "./users"
export { RECEIVE_TWEETS } from "./tweets"
export { SET_AUTH_USER } from "./authUser"

import { getInitialData } from "../../services/index"
import { receiveTweets } from "./tweets"
import { receiveUsers } from "./users"
import { setAuthUser } from "./authUser"

const AUTH_ID: string = "evan_kol"

export const handleInitialization = (): Function => {
	return async (dispatch: Function): Promise<void> => {
		const { users, tweets } = await getInitialData();
		dispatch(receiveUsers(users))
		dispatch(receiveTweets(tweets))
		dispatch(setAuthUser(AUTH_ID))
	}
}