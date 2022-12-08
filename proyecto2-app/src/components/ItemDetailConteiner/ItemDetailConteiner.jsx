import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { gFetch } from "../GFETCH/gFetch"
import { ItemCount } from "../ItemCount/ItemCount"

import './ItemDetailConteiner.css'

export const ItemDetailConteiner = () => {
    const [product,setProduct]=useState({})
    const {productID} = useParams()


    useEffect(()=>{
        gFetch()
        .then( respProd => setProduct(respProd.find(prod => prod.id === productID)))
        .catch(err => console.log(err))
    },[])

return (
    <>
    <div className="divdetail">
    <div className="proddetaildiv">
    <div className="imgdiv">
    <img src={`.${product.foto}`} alt='' className='prodimg' ></img>
    </div>
        <h1>{product.nombre}</h1>
        <h2>{product.category}</h2>
        <h2>{product.precio}</h2>
    </div>
    <div><ItemCount/></div>
    </div>
    </>
)
}
