import { useEffect } from "react";
import { Link } from "react-router-dom"
import './Principal.css'

export const Principal = () => {

    useEffect(() => { 
        document.body.style.backgroundColor = 'black';
        document.body.style.color='white';
    }, []);

    return (
    <div className="div_main">
    <div className="div_principal">
        <h1>LOS MEJORES JUEGOS, AL MEJOR PRECIO</h1>
        <Link to='/itemlistconteiner'><button className="botoncomprar" >SHOP NOW</button></Link>
    </div>
    </div>
    )
}

