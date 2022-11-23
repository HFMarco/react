import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { NavBar } from './components/NavBar/NavBar.jsx'
import {ItemListContainer} from './components/Itemlistcontainter/ItemListContainer.jsx'

function App() {
  return (
    <div>
    <NavBar>
    </NavBar>  
    <ItemListContainer greeting={'Hola,  Bienvenido'}/> 
    </div>
  )
}

export default App
