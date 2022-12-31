import { Link } from 'react-router-dom'
import { useCartContext } from '../../Contexts/CartContextProvider'
import './CartWidget.css'


export const Cartwidget = () => {
    const{cantidadTotal} = useCartContext()
    return (
    <div>
        {cantidadTotal !== 0 && <div style={{backgroundColor :"white",color :"black", borderRadius:"20px", width :"30px", height :"30px",textAlign:"center",paddingTop:"7px"}}>{cantidadTotal}</div> }
    <div className="carw">
    <Link to='/cart' className='linka'></Link>
    </div>
    </div>
    )
}
