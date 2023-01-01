import { useState,useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ItemList } from '../ItemList/ItemList'
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore'
import './ItemListConteiner.css'
import { Footerund } from '../Footer/Footerund'
import { Loading } from '../Loading/Loading'



export const ItemListConteiner = () => {
    const [loading, setLoading] = useState(true)
    const[products,setProducts]= useState([])
    const{id}=useParams()
    useEffect(()=>{
        const db = getFirestore()
        const queryCollection = collection(db, 'productos')
        if (id) {
            const queryFiltrada = query(queryCollection, where('category', '==', id))
            getDocs(queryFiltrada)
            .then(data => setProducts(data.docs.map(product => ({id: product.id, ...product.data()}))))
            .catch(err => console.log(err))
            .finally(()=>setLoading(false))
        } else {
            getDocs(queryCollection)
            .then(data => setProducts(data.docs.map(product =>({id: product.id, ...product.data()}))))
            .catch(err =>console.log())
            .finally(()=>setLoading(false))
        }
    },[id])

    return(
        <>
        {loading ?
        <Loading/>
            :
            <>
            <div className='shop_container'>
            <div className='barraderecha'>
            <div className='buscador'>
                <input id="inputbuscador"></input>
            </div>
            <div className='div_categorias'>
                <hr />
                <h3>CATEGORIAS</h3>
                <div className='categlist'>
                    <Link to='/category/Aventura'><p className='inverted-8'>Aventura</p></Link>
                    <Link to='/category/Pelea'><p className='inverted-8'>Pelea</p></Link>
                    <Link to='/category/Horror'><p className='inverted-8'>Horror</p></Link>
                    <Link to='/category/Carreras'><p className='inverted-8'>Carreras</p></Link>
                </div>
            </div>
            </div>    
        <div className='mapcontainer'>
            <ItemList products={products}/>
        </div>
        </div>
        <Footerund />
        </>
            }    
        </>
    )
}
