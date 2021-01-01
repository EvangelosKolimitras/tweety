import { ITweet, ITweetLikeInfo } from './../../services/interface';
import { ITweets } from '../../services/interface';
import { RECEIVE_TWEETS, TOGGLE_TWEET } from '../actions/index';
import { ActionType } from '../actions/tweets';
import { TID } from '../actions/authUser';

export interface DefaultRootState {
	tweets: ITweets
}
const initialState: DefaultRootState = {
	tweets: {}
}

/**
 * 
 * @param state 
 * @param action 
 */
export const tweetsReducer = (state = initialState, action: ActionType) => {

	const { type, payload } = action

	// Type guard for checking if the id is a string or not
	switch (type) {
		case RECEIVE_TWEETS:
			return {
				...state,
				tweets: payload
			}
		case TOGGLE_TWEET: {
			let stringedID = payload.id.toString()
			return {
				...state,
				tweets: {
					...state.tweets,
					[stringedID]: {
						likes: payload.hasLiked == true
							? state.tweets[stringedID].likes.filter((id: string) => id == payload.authUser)
							: state.tweets[stringedID].likes.concat([payload.authUser] as [authUser: TID])
					}
				}
			}
		}
		default:
			return state
	}
}
