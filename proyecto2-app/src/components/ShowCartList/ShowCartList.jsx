import { addDoc, collection, getFirestore } from "firebase/firestore"
import { useState } from "react"
import { useCartContext } from "../../Contexts/CartContextProvider"
import { ItemsCartConteiner } from "../ItemsCartConteier/ItemsCartConteiner"
import './ShowCartList.css'

export const ShowCartList = () => {
    const [dataForm,setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        date:''
    })

    const[emaildos,setEmaildos] = useState({valor:'',validar: null})
    const {cartList , vaciarCarrito, cantidadTotal,sumatotal} = useCartContext()

    const capturedate =() =>{
        dataForm.date = new Date()
    }

    const addOrder =(e) =>{
            e.preventDefault()
            const order = {}
            order.comprador = dataForm
            order.totalprice = sumatotal
            order.items = cartList.map(({id,precio,nombre}) =>({id,precio,nombre}))
            // const orderid =order
            const db = getFirestore()
            const queryCollection = collection(db, 'orders')
            capturedate()


            addDoc(queryCollection, order)
            .then(resp => (alert(`El Id de su pedido es: ${resp.id}`)) )
            .catch(err => console.log(err))
            .finally(() => vaciarCarrito())


    }
    const handleonChange=(e) =>{
        setFormData({
            ...dataForm,
            [e.target.name] : e.target.value
        })

    }
    const onChangecontraseña=(e)=>{
        setEmaildos({...emaildos, valor:e.target.value})
    }

    const validarEmail = () => {
			if(dataForm.email !== emaildos.valor){
                setEmaildos({...emaildos, validar: false});
			} else {

				setEmaildos({...emaildos, validar: true});  
			}
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
                    <input type ="text" onChange={handleonChange} value={dataForm.name} name ="name" placeholder="Ingrese su nombre" required/>
                    <input type ="text" onChange={handleonChange} value={dataForm.phone} name ="phone" placeholder="Ingrese su phono" required/>
                    <input type ="text" onChange={handleonChange} onKeyUp={validarEmail} value={dataForm.email} name ="email" placeholder="Ingrese su email" required/>
                    <input type ="text" onChange={onChangecontraseña} onKeyUp={validarEmail}  value={emaildos.valor} placeholder="Ingrese su email"  required/>
                    {emaildos.validar ?<button style={{cursor: "pointer"}} onSubmit={addOrder} id="btn">Terminar la Compra</button> :<button style={{cursor: "pointer"}} onSubmit={addOrder} id="btn" disabled>Terminar la Compra</button> }
                </form>
            </div>
        </div>
        </div>
    </>
    )
}




