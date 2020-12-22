export interface IUser {
	id: string
	name: string
	avatarURL: string
	tweets: Array<string>
}

export interface IUsers {
	evan_kol: IUser
	john_wick: IUser
	json_stathan: IUser
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