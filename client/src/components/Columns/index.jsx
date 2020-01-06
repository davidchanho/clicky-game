import React from 'react'

import CardColumns from 'react-bootstrap/CardColumns'

import './styles.scss'

export function Columns({ children }) {
	return <CardColumns className='cardColumns'>{children}</CardColumns>
}
