import React, { Component } from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { Navbar, CardColumn, Cards, Img } from 'components'

import { shuffle } from 'util/helper'

import pokemon from 'model/pokemon.json'

class Game extends Component {
	state = {
		pokemon,
		score: 0,
		topScore: 0,
		isClicked: false
	}

	// increase score when user clicks on card
	handleIncrement = p => {
		let { score, pokemon } = this.state

		p.clicked = true

		this.setState({
			score: score + 1,
			isClicked: false
		})
	}

	// resets score and transfer to top score if score is greater than the current top score
	handleReset = () => {
		let { score, topScore, pokemon } = this.state

		pokemon.forEach(p => (p.clicked = false))

		this.setState({
			topScore: topScore > score ? topScore : score,
			score: 0,
			isClicked: true
		})
	}

	handleScore = id => {
		const { pokemon } = this.state
		pokemon.forEach(p => {
			if (id === p.id) {
				p.clicked
					? this.handleReset()
					: this.handleIncrement(p)
			}
		})
	}

	handleClick = id => {
		this.shuffleArray()
		this.handleScore(id)
	}

	shuffleArray = () => this.setState(shuffle(this.state.pokemon))

	render() {
		const { score, topScore, pokemon, isClicked } = this.state

		return (
			<>
				<Navbar>
					<p>
						Score: <span>{score}</span>
					</p>
					<p>
						Top Score: <span>{topScore}</span>
					</p>
				</Navbar>
				<Row>
					<Col>
						<CardColumn>
							{pokemon.map(item => (
								<Cards key={item.id}>
									<Img
										id={item.id}
										image={item.image}
										handleClick={this.handleClick}
										isClicked={isClicked}
									/>
								</Cards>
							))}
						</CardColumn>
					</Col>
				</Row>
			</>
		)
	}
}

export { Game }
