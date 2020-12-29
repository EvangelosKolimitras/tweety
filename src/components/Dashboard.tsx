import React from 'react'

import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { DefaultRootState } from './namespaces';

export const Dashboard = () => {
	const { tweets: t } = useSelector((state: DefaultRootState) => state)
	const tweets = Object.values(t.tweets)
	console.log(tweets);

	return (
		<Container>
			<h1>Dashboard</h1>
			{
				tweets.map(tweet => <p key={tweet.id}>{tweet.id}</p>)
			}
		</Container >
	)
}