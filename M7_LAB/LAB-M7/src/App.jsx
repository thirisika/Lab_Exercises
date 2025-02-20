import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BitcoinRates from './components/BitcoinRates'
import  EmojiProvider from './context/EmojiContext'

import Emoji from './components/Emoji'
import AppRoutes from './routes/AppRoutes'
import NavBar from './components/NavBar'

function App() {
  

  return (
    <>
    <EmojiProvider>
      
      {/* <BitcoinRates/>
      <Emoji/> */}
      <NavBar/>

      <AppRoutes/>
      </EmojiProvider>
      
    </>
  )
}

export default App
