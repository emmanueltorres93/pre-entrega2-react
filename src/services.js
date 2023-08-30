const products = [
    {id: "1", name: "A-1", price: 123400, category: "arañas"},
    {id: "2", name: "A-2", price: 123400, category: "arañas"},
    {id: "3", name: "A-3", price: 123400, category: "arañas"},
    {id: "4", name: "Ap-1", price: 123400, category: "apliques"},
    {id: "5", name: "Ap-2", price: 123400, category: "apliques"},
    {id: "6", name: "Ap-3", price: 123400, category: "apliques"},
    {id: "7", name: "A-1", price: 123400, category: "lamparas"},
    {id: "8", name: "A-2", price: 123400, category: "lamparas"},
    {id: "9", name: "A-3", price: 123400, category: "lamparas"},
];

export const obtenerProducto = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            if(producto){
                resolve(producto)
            }else{
                reject("Producto no encontrado")
                
            }
        }, 2000)
    })
}

export const obtenerProductos = (category)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
          const productosfiltrados = category ? productos.filter((product) => product.categoria === category): productos; 
        resolve(productosfiltrados)
        }, 2000)
    })
}