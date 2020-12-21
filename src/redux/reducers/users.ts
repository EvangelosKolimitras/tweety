import { GET_USERS } from '../actions/index';

const initialUsersState: [] = []

export const usersReducer = (state = initialUsersState, action: any) => {
	const { type } = action
	switch (type) {
		case GET_USERS:
			return state
		default:
			return state
	}
}