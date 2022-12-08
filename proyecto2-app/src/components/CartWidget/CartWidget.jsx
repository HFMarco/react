import { Link } from 'react-router-dom'
import './CartWidget.css'
export const Cartwidget = () => {
    return (
    <div className="carw"><Link to='/cart' className='linka'></Link></div>
    )
}
