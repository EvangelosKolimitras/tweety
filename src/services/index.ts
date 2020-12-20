import { users } from './users'
import { tweets } from './tweets'


function getUsers(): Promise<{}> {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve({ ...users })
		}, 1000)
	})
}

function getTweets(): Promise<{}> {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve({ ...tweets })
		}, 1000);
	})
}


export const getInitialData = async (): Promise<Object> => {
	const [users, tweets] = await Promise.all([getUsers(), getTweets()])
	return { users, tweets }
}