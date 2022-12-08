import { useState } from "react"
import './ItemCount.css'


export const ItemCount = ({stock=20, initial=1,onAdd}) => {

    const [count, setCount] = useState(1)

    const restar = () => {
        if ( count >initial ){
            setCount(count-1)
        }
    }
    const sumar = () => {
        if ( count < stock ){
            setCount(count+1)
        }
    }

    const handleOnAdd = () =>{
        onAdd(count)
    }
return (
    <>
    <div className="divcount">
    <div className="divlabel">
    {count}
    </div>
    <div className="divaddrest">
    <button onClick={sumar}>+</button>
    <button onClick={restar}>-</button>
    </div>
    <div className="carritoadddiv">
    <button onClick={handleOnAdd}>Agregar al Carrito</button>
    </div>
    </div>
    </>
)
}
