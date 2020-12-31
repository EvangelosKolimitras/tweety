import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner';
import { useEffect, useState } from 'react';
import { ITweets } from '../services/interface';
import { Tweet } from './Tweet';
interface DefaultRootState {
	tweets: ITweets
}

export const Dashboard = () => {
	const { tweets } = useSelector((state: DefaultRootState) => state.tweets)
	const [isLoaded, setIsLoaded] = useState(true);

	useEffect(() => {
		tweets !== null && setIsLoaded(!isLoaded)
	}, [])

	return (
		<Container className="d-flex flex-column justify-content-center align-items-center">
			<h1>Dashboard</h1>
			{
				Object.values(tweets).map(tweet => <Tweet key={tweet.id} tweet={tweet} />)
			}
		</Container >
	)
}