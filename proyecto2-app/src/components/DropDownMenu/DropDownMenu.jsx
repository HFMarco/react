import { Link } from 'react-router-dom'
import './DropDownMenu.css'

export default function DropDownMenu() {
    return (
        <li className='dropdown'>
            <Link to='/' className='dropbtn'>CATEGORIAS</Link>
            <div className='dropdown-content'>
            <Link to='/category/Aventura'><img src='/src/assets/img/sword.png'></img>Aventura</Link>
            <Link to='/category/Pelea'><img src='/src/assets/img/jigsaw.png'></img>Pelea</Link>
            <Link to='/category/Terror'><img src='/src/assets/img/Shooter.png'></img>Terror</Link>
            <Link to='/category/Carreras'><img src='/src/assets/img/finish-flag.png'></img>Carreras</Link>
            </div>
        </li>
    )
}
