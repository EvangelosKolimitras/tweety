import { IUsers } from '../../services/interface';
import { SET_AUTH_USER } from '../actions/index';
import { ISetAuthUserActionCreator } from '../actions/authUser'

type TInitialState = IUsers | null
const initialState: TInitialState = {} || null

/**
 * 
 * @param state 
 * @param action 
 */
export const authUserReducer = (state = initialState, action: ISetAuthUserActionCreator) => {
	const { type, payload } = action
	switch (type) {
		case SET_AUTH_USER: {
			return payload
		}
		default:
			return state
	}
}