
import { useState,useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { gFetch } from '../GFETCH/gFetch'
import './ItemListConteiner.css'


export const ItemListConteiner = () => {

    const[products,setProducts]= useState([])

    const{category}=useParams()


        //consulta de API
    useEffect(()=>{
        if (category) {
            gFetch()
            // .then( respuesta => respuesta)
            .then( data => setProducts(data.filter(prod=>prod.category === category)))
            .catch(err => console.log(err))
        } else {
                gFetch()
            // .then( respuesta => respuesta)
            .then( data => setProducts(data))
            .catch(err => console.log(err))
        }
    
    },[category])


    

    return(
        <div className='shop_container'>
            <div className='categorias'>
                <h1>Categorias</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolorum, dolores nulla exercitationem quasi laboriosam, expedita ex modi minus magni voluptatem corporis quae sit sequi iure accusamus. Voluptatem, consequuntur eaque.</p>
                <ul><li>Primercategoria</li>
                <li>SegundaCategoria</li>
                <li>TerceraCategoria</li></ul>
                
            </div>    
        <div className='mapcontainer'>
            {
                products.map(product => 
                                    
                                        <div className='products_container' key={product.id}>
                                            <div className='img_container'>
                                                <img src={product.foto} alt='' className='prodimg' ></img>
                                            </div>
                                            <div className='product_name'>
                                                <h2>{product.nombre}</h2>
                                            </div>
                                            <div className='product_precio'>
                                                <h2>${product.precio}</h2>
                                            </div>
                                            <div className='shopboton'>
                                                <Link to={`/detail/${product.id}`}><button>Comprar</button></Link>
                                            </div>
                                        </div>
)}
        </div>
        </div>
    
    )
}
