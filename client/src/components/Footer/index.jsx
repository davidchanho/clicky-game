import React from 'react'

import Nav from 'react-bootstrap/Nav'

import './styles.scss'

export function Footer() {
	return (
		<Nav
			className='footer navbar navbar-expand-lg navbar-dark'
			sticky='bottom'
		/>
	)
}
