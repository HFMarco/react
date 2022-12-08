import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { gFetch } from "../GFETCH/gFetch"
import { ItemCount } from "../ItemCount/ItemCount"

import './ItemDetailConteiner.css'

export const ItemDetailConteiner = () => {
    const [product,setProduct]=useState({})
    const {id} = useParams()


    useEffect(()=>{
        gFetch()
        .then( respProd => setProduct(respProd.find(prod => prod.id === id)))
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
        <h2>$ {product.precio}</h2>
    </div>
    <div className="detallegame">Detalle:
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo in placeat vero optio quod, inventore ratione odio quam quasi voluptas vel quae at, temporibus illum? Provident cupiditate porro neque placeat?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo in placeat vero optio quod, inventore ratione odio quam quasi voluptas vel quae at, temporibus illum? Provident cupiditate porro neque placeat?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo in placeat vero optio quod, inventore ratione odio quam quasi voluptas vel quae at, temporibus illum? Provident cupiditate porro neque placeat?</p>
    </div>
    <div><ItemCount/></div>
    </div>
    </>
)
}
