import { IUsers } from '../../services/interface';
import { SET_AUTH_USER } from '../actions/index';
import { ISetAuthUserActionCreator } from '../actions/authUser'

type TinitialState = IUsers | null
const initialState: TinitialState = {} || null

export const authUserReducer = (state = initialState, action: ISetAuthUserActionCreator) => {
	const { type, payload } = action
	switch (type) {
		case SET_AUTH_USER: {
			return payload.id
		}
		default:
			return state
	}
}