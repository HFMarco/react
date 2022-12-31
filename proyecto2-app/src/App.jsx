import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import './App.css'
import { NavBar } from './components/NavBar/NavBar.jsx'
import { ItemListConteiner } from './components/ItemListConteiner.jsx/ItemListConteiner'
import { ItemDetailConteiner } from './components/ItemDetailConteiner/ItemDetailConteiner'
import { CartConteiner } from './components/CartContainer/CartConteiner'
import { Principal } from './components/Principal/Principal'
import { CartContextProvider } from './Contexts/CartContextProvider.jsx'

function App() {
  return (


    <BrowserRouter>

    <CartContextProvider>
      <NavBar />

      <Routes >
        <Route path='/' element={ <ItemListConteiner /> } />
        <Route path='/Home' element={ <Principal /> } />
        <Route path='/itemlistconteiner' element={ <ItemListConteiner /> } />
        <Route path='/category/:id' element={ <ItemListConteiner /> } />
        <Route path='/item/:id' element={ <ItemDetailConteiner /> } />
        <Route path='/cart' element={ <CartConteiner /> } />

        <Route path='*' element={<Navigate to='/'/>}/>

      </Routes>

    </CartContextProvider>
    </BrowserRouter>


  )
}

export default App
  