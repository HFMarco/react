import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { NavBar } from './components/NavBar.jsx'
import {ItemListContainer} from './components/ItemListContainer.jsx'

function App() {
  return (
    <div>
    <NavBar />
    <ItemListContainer greeting={'Holaaa'}/>
    </div>
  )
}

export default App
