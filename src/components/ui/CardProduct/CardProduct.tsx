import { useContext } from 'react'
import styles from './CardProduct.module.css'
import { CartContext } from '../../../context/CartContext';


export const CardProduct = ({product}) => {

  const {dispatch} = useContext(CartContext);

  const item = {
    id: product.tail,
    name: product.name,
    imagen: product.image,
    quantity: 1,
  }

  const addToCart = (item) => {
    dispatch({type: 'ADD_TO_CART', payload: item})
  };

  return (
    <div className={styles.cardContainer}>
        <img className={styles.cardImage} src={product.image} alt={product.name} />
        <div className={styles.cardDetail}>
            <h3 className={styles.cardTitle}>{product.name}</h3>
            <div className={styles.cardBody}>
                <p className={styles.cardType}>{product.type}</p>
                <p className={styles.cardPrice}>
                    Price, <small>00</small>
                </p>
            </div>
            <button className={styles.cardButton} onClick={() => addToCart(item)}>Add Cart</button>
        </div>
    </div>
  )
}
