const products = [
    {id: "1", name: "A-1", price: 123400, category: "chandeliers", image: "/productos/araña.1.jpg"},
    {id: "2", name: "A-2", price: 123400, category: "chandeliers", image: "/productos/araña.2.jpg"},
    {id: "3", name: "A-3", price: 123400, category: "chandeliers", image: "/productos/araña.3.jpg"},
    {id: "4", name: "Ap-1", price: 123400, category: "sconces", image: "/productos/aplique.1.jpg"},
    {id: "5", name: "Ap-2", price: 123400, category: "sconces", image: "/productos/aplique.2.jpg"},
    {id: "6", name: "Ap-3", price: 123400, category: "sconces", image: "/productos/aplique.3.jpg"},
    {id: "7", name: "A-1", price: 123400, category: "lamps", image: "/productos/LM.1.jpg"},
    {id: "8", name: "A-2", price: 123400, category: "lamps", image: "/productos/LM.2.jpg"},
    {id: "9", name: "A-3", price: 123400, category: "lamps", image: "/productos/LM.3.jpg"},
];


export const getProduct = (id) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const product = products.find((p) => p.id === id);
  
        if (product) {
          resolve(product);
        } else {
          reject("Product not found");
        }
      }, 1000);
    });
  };
 

  export const getProducts = (category) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const productsFiltered = category
          ? products.filter((product) => product.category === category)
          : products;
  
        resolve(productsFiltered);
      }, 1000);
    });
  };