const productos = [{id:'1', nombre:'Producto-1', category:'Aventura',precio: 800, stock:20, foto:"./src/assets/img_juegos/borderlands3.jpeg"},
                {id:'2', nombre:'Producto-2', category:'Aventura', precio: 800, stock:20, foto:'./src/assets/img_juegos/darksouls1.jpg'},
                {id:'3', nombre:'Producto-3', category:'Aventura', precio: 800, stock:20, foto:'./src/assets/img_juegos/darksouls2.jpg'},
                {id:'4', nombre:'Producto-4', category:'Pelea', precio: 800, stock:20, foto:'./src/assets/img_juegos/dbfz.jpg'},
                {id:'5', nombre:'Producto-5', category:'Aventura', precio: 800, stock:20, foto:'./src/assets/img_juegos/gow4.jpeg'},
                {id:'6', nombre:'Producto-6', category:'Pelea', precio: 800, stock:20, foto:'./src/assets/img_juegos/mk11.jpeg'},
                {id:'7', nombre:'Producto-7', category:'Horror', precio: 800, stock:20, foto:'./src/assets/img_juegos/resevil2.jpeg'},
                {id:'8', nombre:'Producto-8', category:'Horror', precio: 800, stock:20, foto:'./src/assets/img_juegos/resevil3.jpeg'},
                {id:'9', nombre:'Producto-9', category:'Horror', precio: 800, stock:20, foto:'./src/assets/img_juegos/resevil4.jpg'},
                {id:'10', nombre:'Producto-10', category:'Carreras', precio: 800, stock:20, foto:'./src/assets/img_juegos/assettocorsa.jpg'},
                {id:'11', nombre:'Producto-11', category:'Carreras', precio: 800, stock:20, foto:'./src/assets/img_juegos/forzahorizon5.jpeg'},
                {id:'12', nombre:'Producto-12', category:'Carreras', precio: 800, stock:20, foto:'./src/assets/img_juegos/manager22.jpg'}
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
