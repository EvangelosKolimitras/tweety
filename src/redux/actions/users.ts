
import { IUsers } from "../../services/interface";

// Action
export const RECEIVE_USERS = 'RECEIVE_USERS'

export interface IReceiveUsersActionCreator {
	type: typeof RECEIVE_USERS,
	payload: IUsers
}

/**
 * 
 * @param users 
 */
export const receiveUsers = (users: IUsers): IReceiveUsersActionCreator => {
	return {
		type: RECEIVE_USERS,
		payload: users
	}
}