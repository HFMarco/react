import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Navbar } from './components/Navbar.jsx'
import {Itemlistcontainer} from './components/Itemlistcontainer.jsx'

function App() {
  return (
    <div>
    <Navbar />
    <Itemlistcontainer greeting={'Holaaa'}/>
    </div>
  )
}

export default App
