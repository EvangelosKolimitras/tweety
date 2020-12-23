import { IUsers } from '../../services/interface';
import { RECEIVE_USERS } from '../actions/index';
import { IReceiveUsersActionCreator } from '../actions/users'

const initialState: IUsers = {}

export const usersReducer = (state = initialState, action: IReceiveUsersActionCreator) => {
	const { type, payload } = action
	switch (type) {
		case RECEIVE_USERS:
			return {
				...state,
				...payload
			}
		default:
			return state
	}
}