import '../CartContainer/CartConteiner.css'
import { useCartContext } from "../../Contexts/CartContextProvider"

export const ItemsCartConteiner = ({prod}) => {
    const {eliminaritem} = useCartContext()
    return (
        <div key={prod.id} className= "divproducto">
                <img src={`.${prod.foto}`} alt='' className='prodimg' ></img>
                <div className="datositems"> 
                <div className="datositemsa">
                <p>{prod.nombre}</p>
                <p style={{fontSize:"15px"}}>Producto Original</p>
                </div>
                <p>{prod.precio} $</p>
                </div>
                <div>
                <button onClick={()=>eliminaritem(prod)} style={{cursor: "pointer"}} className="buttondeleteitem" ><img src="eliminar.png" alt="deletebutton" className="eliminarimg" /></button>
                <h4>Cant:{prod.count}</h4>
                </div>
    </div>
)
}

