import React from 'react'

export function Tweet() {
	return (
		<section>
			<h1>Write a tweet</h1>
			<form className="new_tweet_form">
				<textarea name="tweet-content" id="tweet-contnet" cols={30} rows={10}></textarea>
				<button>Submit</button>
			</form>
		</section>
	)
}

