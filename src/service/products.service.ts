import { Products } from "../interface";

export const getProducts = async ():Promise<Products[]> => {
    try {
      const response = await fetch('http://localhost:3000/product');
      
      if(response.ok){
        const data = await response.json();
        return data;
      }else{
        throw new Error('Faild to fetch products');
      }
    } catch (error) {
      throw new Error('Network error');
    }
  }