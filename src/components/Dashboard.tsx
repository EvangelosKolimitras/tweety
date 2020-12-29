import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { DefaultRootState } from './namespaces';
import Spinner from 'react-bootstrap/Spinner'
import { useEffect, useState } from 'react';

export const Dashboard = () => {
	const { tweets: t } = useSelector((state: DefaultRootState) => state.tweets)
	const tweets = Object.values(t)
	const [isLoaded, setIsLoaded] = useState(true);

	useEffect(() => {
		let timer = setTimeout(() => {
			tweets !== null && setIsLoaded(!isLoaded)
		}, 500);
	}, [])

	return (
		<Container>
			{	isLoaded ?
				<>
					<Spinner animation="border" role="status">
						<span className="sr-only">Loading...</span>
					</Spinner>
				</> :
				<>
					<h1>Dashboard</h1>
					{
						tweets.map(tweet => <p key={tweet.id}>{tweet.id}</p>)
					}
				</>
			}
		</Container >
	)
}