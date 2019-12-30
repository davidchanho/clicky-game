import React from 'react'

import Image from 'react-bootstrap/Image'

import './Image.css'

function Img(props) {
	return (
		<Image
			onClick={() => props.handleClick(props.id)}
			className='image'
			src={props.image}
		/>
	)
}

export { Img }
