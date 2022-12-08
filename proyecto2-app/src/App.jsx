import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import './App.css'
import { NavBar } from './components/NavBar/NavBar.jsx'
import { ItemListConteiner } from './components/ItemListConteiner.jsx/ItemListConteiner'
import { ItemDetailConteiner } from './components/ItemDetailConteiner/ItemDetailConteiner'
import { CartConteiner } from './components/CartContainer/CartConteiner'
import { Principal } from './components/Principal/Principal'

function App() {
  return (
    <BrowserRouter>
    <NavBar />

    <Routes >
      
      
      <Route path='/' element={ <ItemListConteiner /> } />
      <Route path='/Home' element={ <Principal /> } />
      <Route path='/itemlist/:category' element={ <ItemListConteiner /> } />
      <Route path='/detail/:productID' element={ <ItemDetailConteiner /> } />
      <Route path='/cart' element={ <CartConteiner /> } />

      <Route path='*' element={<Navigate to='/'/>}/>

    </Routes>
    </BrowserRouter>
  )
}

export default App
  