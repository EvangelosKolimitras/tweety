import { ITweetLikeInfo, ITweets } from "../../services/interface";
import { saveLikeToggle } from './../../services/index';

export const RECEIVE_TWEETS = "RECEIVE_TWEETS";
export const TOGGLE_TWEET = "TOGGLE_TWEET";

export interface IReceiveTweetsActionCreator {
	type: typeof RECEIVE_TWEETS
	payload: ITweets
}

/**
 * 
 * @param tweets 
 */
export const receiveTweets = (tweets: ITweets): IReceiveTweetsActionCreator => ({
	type: RECEIVE_TWEETS,
	payload: tweets
})

export interface IToggleTweetActionCreator {
	type: typeof TOGGLE_TWEET
	payload: ITweetLikeInfo<object>
}

/**
 * 
 * @param info object
 */
const toggleTweet = <T extends ITweetLikeInfo<object>>(info: T): IToggleTweetActionCreator => ({
	type: TOGGLE_TWEET,
	payload: info
})

export const toggleTweetAsyncAC = <T extends ITweetLikeInfo<object>>(info: T): Function => {
	return async (dispatch: Function): Promise<any> => {
		dispatch(toggleTweet(info))
		try {
			return await saveLikeToggle(info)
		} catch (error: any) {
			console.warn(error)
			dispatch(toggleTweet(info))
			alert("There was an error liking the tweet. Try again.")
		}
	}
}

export type ActionType = IReceiveTweetsActionCreator | IToggleTweetActionCreator