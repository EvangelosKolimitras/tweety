import { ITweets } from '../../services/interface';
import { RECEIVE_TWEETS } from '../actions/index';
import { IReceiveTweetsActionCreator } from '../actions/tweets';

export declare interface DefaultRootState {
	tweets: ITweets
}
const initialState: DefaultRootState = {
	tweets: {}
}

export const tweetsReducer = (state = initialState, action: IReceiveTweetsActionCreator) => {
	const { type, payload } = action
	switch (type) {
		case RECEIVE_TWEETS:
			return {
				...state,
				tweets: payload
			}
		default:
			return state
	}
}