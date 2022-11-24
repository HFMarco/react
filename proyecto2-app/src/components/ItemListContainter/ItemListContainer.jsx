import Desplegable from '../DropDownMenu/DropDownMenu'
import './ItemListContainer.css'


export const ItemListContainer = ( {greeting} ) => {
    return(
        <div>
            <ul className="contenedorflex_item">
                <li><a href="">Home</a></li>
                <li><a href="">Shop</a></li>
                <Desplegable />
                <a href="" className='searcha'><div className='searchlogo'></div></a>
                <p>{greeting}</p>
            </ul>
        </div>
    )
}



