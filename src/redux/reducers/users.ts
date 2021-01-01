import { IUsers } from '../../services/interface';
import { RECEIVE_USERS } from '../actions/index';
import { IReceiveUsersActionCreator } from '../actions/users'

export interface DefaultRootState {
	users: IUsers
}

const initialState: DefaultRootState = {
	users: {}
}

/**
 * 
 * @param state 
 * @param action 
 */
export const usersReducer = (state = initialState, action: IReceiveUsersActionCreator) => {
	const { type, payload } = action

	switch (type) {
		case RECEIVE_USERS:
			return {
				...state,
				users: payload
			}
		default:
			return state
	}
}