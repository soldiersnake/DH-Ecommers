import { Product } from "../interface";

export const getProducts = async ( page = 1, limit = 5 ):Promise<Product[]> => {
    try {
      const response = await fetch(`http://localhost:3000/product?_page=${page}&_limit=${limit}`);
      console.log('page :', page);
      
      if (response.ok) {
        let products: Product[] = await response.json();

         // Modifica cada producto directamente
        products.forEach((product) => {
          // product.id = index + 1;  // Agrega un 'id' basado en el índice del array
          product.price = Math.floor(Math.random() * (451)) + 50;  // Agrega un 'price' aleatorio entre 50 y 500
        });
        
        // Agrega 'id' y 'price' a cada producto
        return products;
      }else{
        throw new Error('Faild to fetch products');
      }
    } catch (error) {
      throw new Error('Network error');
    }
  }

export const createProduct = async (product : Product) : Promise<Product[]> => {
  try {
    const response = await fetch('http://localhost:3000/product', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(product),
    });

    if(response.ok){
      const data = await response.json();
      return data;
    }else{
      throw new Error('Fail to create product');
    }
  } catch (error) {
    throw new Error('Network error');
  }
}