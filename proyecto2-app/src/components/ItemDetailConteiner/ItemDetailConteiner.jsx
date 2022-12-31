import { doc, getDoc, getFirestore } from "firebase/firestore"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { useCartContext } from "../../Contexts/CartContextProvider"
import { ButtonHandle } from "../Buttonhandle/ButtonHandle"
import { ItemCount } from "../ItemCount/ItemCount"

import './ItemDetailConteiner.css'

export const ItemDetailConteiner = () => {
    const [product,setProduct]=useState({})
    const {id} = useParams()
    const [cantidadExiste, setCantidadExiste] = useState(false)
    useEffect(()=>{
            const db = getFirestore()
            const queryDoc = doc(db, 'productos', id)
            getDoc(queryDoc)
            .then(resp => setProduct({id : resp.id, ...resp.data()}))
            .catch(err => console.log(err))
        },[])

    const {  agregarCarrito} = useCartContext()

    const onAdd = (count)=>{
        agregarCarrito({...product , count});
        setCantidadExiste(true)
    }

    const [inputType, setInputType] = useState('button')


    const handleInter = () => {
        setInputType('input')
    }

return (
    <>
    <div className="divdetail">
    <div className="proddetaildiv">
    <div className="imgdiv">
    <img src={`${product.foto}`} alt='' className='prodimg' ></img>
    </div>
    </div>
    <div className="detallegame">
        <h1>{product.nombre}</h1>
        <h2>{product.category}</h2>
        Detalle:
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo in placeat vero optio quod, inventore ratione odio quam quasi voluptas vel quae at, temporibus illum? Provident cupiditate porro neque placeat?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo in placeat vero optio quod, inventore ratione odio quam quasi voluptas vel quae at, temporibus illum? Provident cupiditate porro neque placeat?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo in placeat vero optio quod, inventore ratione odio quam quasi voluptas vel quae at, temporibus illum? Provident cupiditate porro neque placeat?</p>
    </div>
    {
        inputType === 'button' ?

        <div className="divbotones_comprar">
        <h2>Precio: $ {product.precio}</h2>
            <ButtonHandle handleInter={handleInter} />
        </div>
        :
            cantidadExiste ?
            <div className="divprecio_b">
                <Link to="/cart"><button>Ver Carrito</button></Link>
                <Link to="/"><button>Continuar Comprando</button></Link>
            </div>
            :
            <div className="divprecio">
            <ItemCount stock={product.stock} initial={1} onAdd={onAdd}/>
            </div>
    }
    </div>
    </>
)
}
