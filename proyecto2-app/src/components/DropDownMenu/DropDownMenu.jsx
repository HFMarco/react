import './DropDownMenu.css'

export default function Desplegable() {
    return (
        <li className='dropdown'>
            <a href="" className='dropbtn'>CATEGORIAS</a>
            <div className='dropdown-content'>
            <a href="#"><img src='/src/assets/img/shooter.png'></img>Link 1</a>
            <a href="#"><img src='/src/assets/img/jigsaw.png'></img>Link 2</a>
            <a href="#"><img src='/src/assets/img/sword.png'></img>Link 3</a>
            <a href="#"><img src='/src/assets/img/finish-flag.png'></img>Link 4</a>
            </div>
        </li>
    )
}
