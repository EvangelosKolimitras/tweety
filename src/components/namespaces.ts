import { ITweets, IUsers } from '../services/interface';

export interface DefaultRootState {
	users: IUsers, tweets: ITweets
}
