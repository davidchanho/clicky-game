import React from 'react'

import Image from 'react-bootstrap/Image'

import './styles.scss'

export function Img(props) {
  return (
    <Image
      onClick={() => props.handleClick(props.id)}
      className='image undraggable unselectable'
      src={props.image}
    />
  )
}
