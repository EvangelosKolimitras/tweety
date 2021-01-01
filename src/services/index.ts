
import { ITweets, IUsers } from './interface';
import { users } from './users'
import { tweets, _saveLikeToggle } from './tweets'
import { ITweetLikeInfo } from './interface'

function getUsers(): Promise<IUsers> {
	return new Promise((resolve, _reject) => {
		setTimeout(() => {
			resolve({ ...users })
		}, 1000)
	})
}

function getTweets(): Promise<ITweets> {
	return new Promise((resolve, _reject) => {
		setTimeout(() => {
			resolve({ ...tweets })
		}, 1000);
	})
}

export const getInitialData = async (): Promise<{ users: IUsers, tweets: ITweets }> => {
	const [users, tweets] = await Promise.all([getUsers(), getTweets()])
	return { users, tweets }
}

/**
 * 
 * @param info 
 */
export const saveLikeToggle = (info: ITweetLikeInfo): any => _saveLikeToggle(info)