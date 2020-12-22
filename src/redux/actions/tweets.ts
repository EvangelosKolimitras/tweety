import { ITweet } from "../../services/interface";
export const RECEIVE_TWEETS = "RECEIVE_TWEETS";

interface IReceiveTweetsActionCreator {
	type: typeof RECEIVE_TWEETS
	payload: ITweet[]
}

export const receiveTweets = (tweets: ITweet[]): IReceiveTweetsActionCreator => {
	return {
		type: RECEIVE_TWEETS,
		payload: tweets
	}
}

