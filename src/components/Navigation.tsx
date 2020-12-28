import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export function Navigation() {
	return (
		<Container>
			<ul>
				<Link to="/" title="home" >Home</Link>
				<Link to="/tweets/:id" title="new_tweet">New Tweet</Link>
			</ul>
		</Container>
	)
}
