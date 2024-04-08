import { Product } from "../interface";

export const getProducts = async ():Promise<Product[]> => {
    try {
      const response = await fetch('http://localhost:3000/product');
      
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