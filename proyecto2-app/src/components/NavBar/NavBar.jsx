import './NavBar.css'
import { Menu } from '../Menu/Menu'
import { Link } from 'react-router-dom'

export const NavBar = () => {
    return(
        <>
        <div className='contenedorflex'>
            <Link to="/"><div className='Brand'></div></Link>
            <div className='contenedorflex_item'>
            <Link to ="/"><div className='searchicon'></div></Link>
            </div>
        </div>
        <Menu />
        </>
    )
}
