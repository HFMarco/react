import './DropDownMenu.css'

export default function Desplegable() {
    return (
        <li className='dropdown'>
            <a href="" className='dropbtn'>CATEGORIAS</a>
            <div className='dropdown-content'>
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
            </div>
        </li>
    )
}
