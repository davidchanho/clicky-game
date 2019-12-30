import React from 'react'

import Card from 'react-bootstrap/Card'

import './Card.css'

function Cards({ children }) {
	return <Card className='card'>{children}</Card>
}

export { Cards }
