import { ITweets } from "../../services/interface";
export const RECEIVE_TWEETS = "RECEIVE_TWEETS";

export interface IReceiveTweetsActionCreator {
	type: typeof RECEIVE_TWEETS
	payload: ITweets
}

export const receiveTweets = (tweets: ITweets): IReceiveTweetsActionCreator => {
	return {
		type: RECEIVE_TWEETS,
		payload: tweets
	}
}

