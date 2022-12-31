import { Link } from "react-router-dom"

const VoidCart = () => {
    return (
    <div className="divvoidcart">
    <h2>Tu carrito está vacío</h2>
    <h4>Parece que aún no has elegido tus productos.</h4>
    <Link to="/"><button>Haz la Compra Ahora</button></Link>
    </div>
)
}
export default VoidCart

