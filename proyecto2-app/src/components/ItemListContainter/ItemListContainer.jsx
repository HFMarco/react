import './ItemListContainer.css'


export const ItemListContainer = ( {greeting} ) => {
    return(
        <div>
            <ul className="contenedorflex_item">
                <li><a href="">Home</a></li>
                <li><a href="">Shop</a></li>
                <li><a href="">Categorías</a></li>
                <Desplegable />
                <a href="" className='searcha'><div className='searchlogo'></div></a>
                <p>{greeting}</p>
            </ul>
        </div>
    )
}



function Desplegable() {
    return (
        <div className='dropcategorias'>
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
        </div>
    )
}
