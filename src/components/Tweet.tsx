import React from 'react'
import { Container } from 'react-bootstrap'

export function Tweet() {
	return (
		<Container>
			<h1>Write a tweet</h1>
			<form className="new_tweet_form">
				<textarea name="tweet-content" id="tweet-contnet" cols={30} rows={10}></textarea>
				<button>Submit</button>
			</form>
		</Container>
	)
}

