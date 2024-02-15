import React from 'react'
import Nav from './Nav.jsx'
import Card from './Card.jsx'
import './App.css'

function App() {
  return (
    <>
      <Nav />
      <h1 className='hero'>We've got the best movies you can ever imagine</h1>
      <p className='intro'>Top Lists</p>
      <Card />
    </>
  )
}

export default App
