
import { useState,useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { gFetch } from '../GFETCH/gFetch'
import { ItemList } from '../ItemList/ItemList'

import './ItemListConteiner.css'


export const ItemListConteiner = () => {

    const[products,setProducts]= useState([])

    const{id}=useParams()


        //consulta de API
    useEffect(()=>{
        if (id) {
            gFetch()
            // .then( respuesta => respuesta)
            .then( data => setProducts(data.filter(prod=>prod.category === id)))
            .catch(err => console.log(err))
        } else {
                gFetch()
            // .then( respuesta => respuesta)
            .then( data => setProducts(data))
            .catch(err => console.log(err))
        }
    
    },[id])


    

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
            <ItemList products={products}/>
        </div>
        </div>
    
    )
}
