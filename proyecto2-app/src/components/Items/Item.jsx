import { Link } from "react-router-dom"

const Item = ({product}) => {
    return (
        <div className='products_container'>
                                        <div className='img_container'>
                                            <Link to={`/item/${product.id}`}><img src={`.${product.foto}`} alt='' className='prodimg' ></img></Link>
                                        </div>
                                        <div className='product_name'>
                                            <h2>{product.nombre}</h2>
                                        </div>
                                        <div className='product_precio'>
                                            <h2>${product.precio}</h2>
                                        </div>
                                        <div className='shopboton'>
                                            <Link to={`/item/${product.id}`}><button>Comprar</button></Link>
                                        </div>
                                    </div>
    )
}

export default Item