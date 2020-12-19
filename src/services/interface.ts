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
