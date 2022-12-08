import { Link } from 'react-router-dom'
import './DropDownMenu.css'

export default function DropDownMenu() {
    return (
        <li className='dropdown'>
            <a href="#" className='dropbtn'>CATEGORIAS</a>
            <div className='dropdown-content'>
            <Link to='/itemlist/Shooter'><img src='/src/assets/img/shooter.png'></img>Link 1</Link>
            <Link to='/itemlist/jigsaw'><img src='/src/assets/img/jigsaw.png'></img>Link 2</Link>
            <Link to='/itemlist/sword'><img src='/src/assets/img/sword.png'></img>Link 3</Link>
            <Link to='/itemlist/finishflag'><img src='/src/assets/img/finish-flag.png'></img>Link 4</Link>
            </div>
        </li>
    )
}
