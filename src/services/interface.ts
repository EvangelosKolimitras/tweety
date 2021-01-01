import { TID } from "../redux/actions/authUser";

export interface IUser {
	id: string
	name: string
	avatarURL: string
	tweets: Array<string>
}

export interface IUsers {
	[key: string]: IUser
}

export interface ITweet {
	id: string
	text: string
	author: string
	timestamp: number
	likes: string[]
	replies: string[]
	replyingTo: null | string
}
export interface ITweets {
	[key: string]: ITweet
}

export interface ITweetLikeInfo<T> {
	id: string
	hasLiked: boolean
	authUser: TID
}