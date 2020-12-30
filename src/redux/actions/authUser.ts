
export const SET_AUTH_USER = "SET_AUTH_USER"

export type TID = string
export interface ISetAuthUserActionCreator {
	type: typeof SET_AUTH_USER
	payload: TID
}

export const setAuthUser = (id: TID): ISetAuthUserActionCreator => {
	return {
		type: SET_AUTH_USER,
		payload: id
	}
}