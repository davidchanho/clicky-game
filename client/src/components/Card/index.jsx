import React from 'react'

import Card from 'react-bootstrap/Card'

import './styles.scss'

export function Cards({ children }) {
  return <Card className='card'>{children}</Card>
}
