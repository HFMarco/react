import { Link } from "react-router-dom"
import './Principal.css'

export const Principal = () => {
    return (
    <div className="div_main">
    <div className="div_principal">
        <h1>LOS MEJORES JUEGOS, AL MEJOR PRECIO</h1>
        <Link to='/itemlist'><button className="botoncomprar">SHOP NOW</button></Link>
    </div>
    </div>
    )
}

