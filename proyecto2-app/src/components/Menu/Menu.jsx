import React from 'react'
import { Link } from 'react-router-dom'
import { Cartwidget } from '../CartWidget/CartWidget'
import DropDownMenu from '../DropDownMenu/DropDownMenu'
import './Menu.css'

export const Menu = () => {
return (
    <div>
    <ul className="contenedorflex_item">
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/itemlistconteiner">Shop</Link></li>
            <DropDownMenu />
            <Cartwidget />
    </ul>
    </div>
)
}
