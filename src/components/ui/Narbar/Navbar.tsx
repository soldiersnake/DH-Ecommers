import Logo from '../../../assets/Crecendo-LOGO.png';
import Cart from '../../../assets/Carrito.png';
import styles from './Navbar.module.css';
import { useState } from 'react';
import { CartModal } from '../CartModal';
import useCartContext from '../../../hooks/useCartContext';


export const Navbar = () => {

  const [showCartModal, setShowCartModal] = useState(false);
  const {state:{cartItems}} = useCartContext();  

  const handleShowCartModal = () => {
    setShowCartModal(!showCartModal);
  };

  return (
    <div className={styles.navbarContainer}>
        <div className={styles.navbarDetail}>
            <img src={Logo} alt="Logo de Ecommers" width={70} height={'auto'} style={{marginTop:'10px'}} />
            <div>
                <span>Ecommers</span>
            </div>
        </div>
        <div className={styles.navbarCartContainer}>
            <p className={styles.navbarTextAmount}>{cartItems.length > 0 ? cartItems.length : ''}</p>
            <img src={Cart} alt="Cart"  width={50} height={'auto'} onClick={handleShowCartModal}/>
        </div>
        {showCartModal && (<CartModal handleShowCartModal={handleShowCartModal}/>)}
    </div>
  )
}
