import { RECEIVE_USERS } from '../actions/index';

const initialUsersState: [] = []

export const usersReducer = (state = initialUsersState, action: any) => {
	const { type } = action
	switch (type) {
		case RECEIVE_USERS:
			return state
		default:
			return state
	}
}