
// Action
export const GET_USERS = 'GET_USERS'

interface GetUsersActionCreator {
	type: typeof GET_USERS,
	payload: Array<{}>
}

// Action creator
export const getUsers = (users: any): GetUsersActionCreator => {
	return {
		type: GET_USERS,
		payload: users
	}
}