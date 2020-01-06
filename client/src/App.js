import React, { Component } from 'react'
import { HashRouter, Route, Link } from 'react-router-dom'

import Game from './Pages'

import './App.css'

class App extends Component {
  render() {
    return (
      <HashRouter basename='*'>
        <div id='app'>
          <Route exact path='*' component={Game} />
        </div>
      </HashRouter>
    )
  }
}

export default App
