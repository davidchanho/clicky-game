import React from 'react'

import Nav from 'react-bootstrap/Nav'

import './styles.scss'

export function Navbar({ children }) {
	return (
		<Nav className='navbar'>
			<h3 className='navbar-brand' href='/'>
				Clicky Game
			</h3>
			<h3>
				Click on an image to earn points, but don't click on any more than once!
			</h3>
			{children}
		</Nav>
	)
}
