import styles from './CartModal.module.css';
import Close from '../../../assets/close.svg';
import { FC } from 'react';
import useCartContext from '../../../hooks/useCartContext';
import { CartProduct } from '../../../interface';

interface Props{
    handleShowCartModal : () => void
}

export const CartModal: FC<Props> = ({handleShowCartModal}) => {

    const {state:{cartItems}, dispatch} = useCartContext();  
    
    const removeToCart = (item: CartProduct) => {
        dispatch({type: 'REMOVE_FROM_CART', payload: item});
    };

    const addToCart = (item: CartProduct) => {
        dispatch({type: 'ADD_TO_CART', payload: item});
    };
    
  return (
    <div className={styles.modalContainer}>
        <button className={styles.modalCloseButton} onClick={handleShowCartModal}>
            <img src={Close} alt="Close" />
        </button>
        <table className={styles.modalTable}>
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Delete</th>
                    <th>Quantity</th>
                    <th>Add</th>
                </tr>
            </thead>
            <tbody>
                {
                    cartItems.map((item) => (
                    <tr key={item.id}>
                        <td>
                            <p>{item.name}</p>
                        </td>
                        <td>
                            <button className={styles.modalButtonRemove} onClick={() => removeToCart(item)}>-1</button>
                        </td>
                        <td>
                            <p>{item.quantity}</p>
                        </td>
                        <td>
                            <button className={styles.modalButtonAdd} onClick={() => addToCart(item)}>+1</button>
                        </td>
                    </tr>
                    ))
                }
            </tbody>
        </table>
        <div className={styles.modalTotalContainer}>
            <h3>Total: 400,00</h3>
        </div>
        <div className={styles.modalButtonContainer}>
            <button>CheckOut</button>
        </div>
    </div>
  )
}
