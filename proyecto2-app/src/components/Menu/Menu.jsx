import React from 'react'
import { Link } from 'react-router-dom'
import { Cartwidget } from '../CartWidget/CartWidget'
import './Menu.css'

export const Menu = () => {
return (
    <div className='contenedor_lista'>
    <ul className="contenedorflex_item">
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/itemlistconteiner">Shop</Link></li>
            <Cartwidget />  
    </ul>
    </div>
)
}
