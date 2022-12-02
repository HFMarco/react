import './NavBar.css'
import { Cartwidget } from '../CartWidget/CartWidget'

export const NavBar = () => {
    return(
        <div className='contenedorflex'>
            <div className='Brand'></div>
            <Cartwidget />
        </div>
    )
}
