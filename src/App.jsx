import { useState } from 'react'
import './App.css'
import Nav from './Nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav></Nav>
      <h1>this is a static website</h1>
      <h1>welcome friends this is my static website</h1>
    </>
  )
}

export default App
