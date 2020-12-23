export const SET_AUTH_USER = "SET_AUTH_USER"

export interface ISetAuthUserActionCreator {
	type: typeof SET_AUTH_USER
	payload: string
}

export const setAuthUser = (id: string): ISetAuthUserActionCreator => {
	return { type: SET_AUTH_USER, payload: id }
}