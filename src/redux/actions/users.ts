
import { IUser } from "../../services/interface";

// Action
export const RECEIVE_USERS = 'RECEIVE_USERS'

interface IReceiveUsersActionCreator {
	type: typeof RECEIVE_USERS,
	payload: Array<{}>
}

// Action creator
export const receiveUsers = (users: IUser[]): IReceiveUsersActionCreator => {
	return {
		type: RECEIVE_USERS,
		payload: users
	}
}