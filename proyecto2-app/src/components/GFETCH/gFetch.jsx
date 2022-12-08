const productos = [{id:'1', nombre:'Producto-1', category:'Aventura',precio: 800, stock:20, foto:"./src/assets/img_juegos/borderlands3.jpeg"},
                {id:'2', nombre:'Producto-2', category:'Aventura', precio: 800, stock:20, foto:'./src/assets/img_juegos/darksouls1.jpg'},
                {id:'3', nombre:'Producto-3', category:'Aventura', precio: 800, stock:20, foto:'./src/assets/img_juegos/darksouls2.jpg'},
                {id:'4', nombre:'Producto-4', category:'Pelea', precio: 800, stock:20, foto:'./src/assets/img_juegos/dbfz.jpg'},
                {id:'5', nombre:'Producto-5', category:'Aventura', precio: 800, stock:20, foto:'./src/assets/img_juegos/gow4.jpeg'},
                {id:'6', nombre:'Producto-5', category:'Pelea', precio: 800, stock:20, foto:'./src/assets/img_juegos/mk11.jpeg'},
                {id:'7', nombre:'Producto-5', category:'Terror', precio: 800, stock:20, foto:'./src/assets/img_juegos/resevil2.jpeg'},
                {id:'8', nombre:'Producto-5', category:'Terror', precio: 800, stock:20, foto:'./src/assets/img_juegos/resevil3.jpeg'},
                {id:'9', nombre:'Producto-5', category:'Terror', precio: 800, stock:20, foto:'./src/assets/img_juegos/resevil4.jpg'}
]
export const gFetch = () => {
    return new Promise((res,rej)=>{
        const condition = true
        if (condition) {
                res(productos)
        }
        else{
            rej('Mensaje de error')
        }
    })
}
