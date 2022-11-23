import './NavBar.css'
import { Carwidget } from '../CarWidget/CarWidget'

export const NavBar = () => {
    return(
        <div className='contenedorflex'>
            <div className='Brand'></div>
            <Carwidget />
        </div>
    )
}
