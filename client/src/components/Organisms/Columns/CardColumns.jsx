import React from 'react'

import CardColumns from 'react-bootstrap/CardColumns'

import './CardColumns.css'

function CardColumn({ children }) {
	return <CardColumns className='cardColumns'>{children}</CardColumns>
}

export { CardColumn }
