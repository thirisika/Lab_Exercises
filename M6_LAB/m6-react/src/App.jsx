import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeting from './components/Greeting'
import BigCats from './components/BigCats'
import Emoji from './components/Emoji'
import Calculator from './components/Calculator'

function App() {
  

  return (
    <>
      <Greeting />
      <Greeting name="John"/>
      <Greeting name="Mary"> Welcome!!!</Greeting>
      <BigCats/>
      <Emoji/>
      <Calculator/>
       
    </>
  )
}

export default App
