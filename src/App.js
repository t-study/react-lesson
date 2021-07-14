import React, { Component } from 'react'
import Subject from './components/Subject'
import TOC from './components/TOC'
import Content from './components/Contents'

import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Subject title="WEB" sub="world wide web"></Subject>
        <TOC></TOC>
        <Content title="HTML" desc="HTML is HyperTextMarkup Language."></Content>
      </div>
    )
  }
}

export default App
