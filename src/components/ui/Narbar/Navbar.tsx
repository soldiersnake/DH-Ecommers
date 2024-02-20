import Logo from '../../../assets/Crecendo-LOGO.png';
import Cart from '../../../assets/Carrito.png';
import styles from './Navbar.module.css';
import { useState } from 'react';
import { CartModal } from '../CartModal';


export const Navbar = () => {

  const [showCartModal, setShowCartModal] = useState(false);

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
            <p className={styles.navbarTextAmount}>2</p>
            <img src={Cart} alt="Cart"  width={50} height={'auto'} onClick={handleShowCartModal}/>
        </div>
        {showCartModal && (<CartModal handleShowCartModal={handleShowCartModal}/>)}
    </div>
  )
}
