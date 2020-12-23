import { ITweets } from '../../services/interface';
import { RECEIVE_TWEETS } from '../actions/index';
import { IReceiveTweetsActionCreator } from '../actions/tweets';

const initialState: ITweets = {}

export const tweetsReducer = (state = initialState, action: IReceiveTweetsActionCreator) => {
	const { type, payload: { tweets } } = action
	switch (type) {
		case RECEIVE_TWEETS:
			return { ...state, tweets }
		default:
			return state
	}
}