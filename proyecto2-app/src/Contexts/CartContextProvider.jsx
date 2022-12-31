import { createContext, useContext,useEffect,useState } from "react"

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider=({children})=> {
    const [cartList, setCartList] = useState([])
    const agregarCarrito = (product) =>{
        const idx = cartList.findIndex(prod => prod.id === product.id)
        if (idx != -1) {
            cartList[idx].count += product.count
            setCartList([...cartList])
        } else {
            setCartList([ ...cartList, product])
        }
    }
    const eliminaritem = (elemento) => {
        const elimina = cartList.filter((product) => product.id !== elemento.id)
        setCartList(elimina);
    };
    const [cantidadTotal, setcantidadTotal] = useState(0);
    useEffect(() => {
        const handlecantidad = () => {
            const aumentarcantidad = cartList.map((product) => parseFloat(product.count))
            .reduce((previous, current) => {
            return previous + current;
            }, 0);
            setcantidadTotal(aumentarcantidad);
        };
        handlecantidad();

    });
    const [sumatotal, setSumtotal] = useState(0);
    useEffect(() => {
    const handlesumar = () => {
        const sumar = cartList.map((product) => parseFloat(product.precio) * parseFloat(product.count))
        .reduce((previous, current) => {
        return previous + current;
        }, 0);
        setSumtotal(sumar);
    };
    handlesumar();
    });
    const vaciarCarrito =() =>{
        setCartList([])
    }

    return (
    <CartContext.Provider value={{
        agregarCarrito,
        cartList,
        vaciarCarrito,
        setSumtotal,
        setcantidadTotal,
        eliminaritem,
        cantidadTotal,
        sumatotal,
    }}>
        {children}
    </CartContext.Provider>
)
}

