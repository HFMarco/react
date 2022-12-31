import Item from "../Items/Item"

export const ItemList = ({products}) => {
    return (
            products.map(product => <Item key={product.id} product ={product}/>
)
    )
}
