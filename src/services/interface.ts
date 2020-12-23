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
	replyingTo: null
}
export interface ITweets {
	[key: string]: ITweet
}