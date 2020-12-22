export { RECEIVE_USERS } from "./users"
export { RECEIVE_TWEETS } from "./tweets"

import { getInitialData } from "../../services/index"
import { receiveTweets } from "./tweets"
import { receiveUsers } from "./users"

export function handleInitialData() {
	return (dispatch: Function) => {
		return getInitialData().then((({ users, tweets }) => {
			dispatch(receiveUsers(users))
			dispatch(receiveTweets(tweets))
		}))
	}
}