import { useCartContext } from "../../Contexts/CartContextProvider"
import { ShowCartList } from "../ShowCartList/ShowCartList"
import VoidCart from "../VoidCart/VoidCart"

import './CartConteiner.css'

export const CartConteiner = () => {
    const {cartList} = useCartContext()
    return (
    <>
        {cartList.length !== 0 ? 
        <>
        <ShowCartList />
        </>
        :
        <VoidCart />
        }
    </>  
    )
}
