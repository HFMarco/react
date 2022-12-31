import { addDoc, collection, getFirestore } from "firebase/firestore"
import { useState } from "react"
import { useCartContext } from "../../Contexts/CartContextProvider"
import { ItemsCartConteiner } from "../ItemsCartConteier/ItemsCartConteiner"


export const ShowCartList = () => {
    const [dataForm,setFormData] = useState({
        name: '',
        email: '',
        phone: ''
    })
    const {cartList , vaciarCarrito, cantidadTotal,sumatotal} = useCartContext()

    const addOrder =(e) =>{
        e.preventDefault()
        const order = {}
        order.comprador = dataForm
        order.totalprice = sumatotal
        order.items = cartList.map(({id,precio,nombre}) =>({id,precio,nombre}))
        const db = getFirestore()
        const queryCollection = collection(db, 'orders')

        addDoc(queryCollection, order)
        .then(resp => (resp))
        .catch(err => console.log(err))
        .finally(() => vaciarCarrito())
    }
    const handleonChange=(e) =>{
        setFormData({
            ...dataForm,
            [e.target.name] : e.target.value
        })
    }

    return (
    <>
    <div className="titulocart">
        <p>Tu Carrito</p>
        <button onClick={vaciarCarrito}>Vaciar Carrito</button>
        </div>
        <div className="divgencart">
        <div className='divcartgeneral'>
            <div className="contenedor_productos">
            {cartList.map(prod =>
                    <ItemsCartConteiner key={prod.id} prod ={prod}/>
            )}
            </div>
            <div className="divresumencompra" >
            <h1>RESUMEN</h1>
            <div className="precioxproducto">
            <p>{cantidadTotal} Productos</p>
            <p>{sumatotal}$</p>
            </div>
            <span style={{ width : "400px", height : "1px", backgroundColor : "white"}}/>
            <div className="divsumatotal">
            <p>Total:</p>
            <p className="precio">{sumatotal}$</p>
            </div>
                <form onSubmit={addOrder}>
                    <input type ="text" onChange={handleonChange} value={dataForm.name} name ="name" placeholder="Ingrese su nombre" />
                    <input type ="text" onChange={handleonChange} value={dataForm.phone} name ="phone" placeholder="Ingrese su phono" />
                    <input type ="text" onChange={handleonChange} value={dataForm.email} name ="email" placeholder="Ingrese su email" />
                    <button style={{cursor: "pointer"}} >Terminar la Compra</button>
                </form>
            </div>
        </div>
        </div>
    </>
    )
}




