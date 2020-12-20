import React from 'react'
import { Link } from 'react-router-dom'

export function Navigation() {
	return (
		<div>
			<ul>
				<Link to="/" title="home" >Home</Link>
				<Link to="/tweets/:id" title="tweets">Tweets</Link>
			</ul>
		</div>
	)
}
