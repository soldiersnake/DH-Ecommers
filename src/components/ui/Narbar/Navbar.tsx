// import Logo from '../../../assets/Crecendo-LOGO.png';
// import Cart from '../../../assets/Carrito.png';
import styles from './Navbar.module.css';
import { useState } from 'react';
import { CartModal } from '../CartModal';
import useCartContext from '../../../hooks/useCartContext';
import { useLocation, useNavigate } from 'react-router-dom';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


export const Navbar = () => {
  console.log('styles de navbar:', styles);
  const navigate = useNavigate();
  const location = useLocation();

  const [showCartModal, setShowCartModal] = useState(false);
  const {state:{cartItems}} = useCartContext();  

  const handleShowCartModal = () => {
    setShowCartModal(!showCartModal);
  };
  const handleNavigateToHome = () => {
    navigate('/');
  };

  return (
    <div className={styles.navbarContainer}>
        <div className={styles.navbarDetail} onClick={handleNavigateToHome}>
            {/* <img src={Logo} alt="Logo de Ecommers" width={70} height={'auto'} style={{marginTop:'10px'}} /> */}
            <VideogameAssetIcon style={{ fontSize: 50 }}/>
            <div>
                <span>Ecommers</span>
            </div>
        </div>
        {
          location.pathname !== '/checkout' && ( // se utiliza useLocation para poner condicionales para las ubicaciones
            <>
              <div className={styles.navbarCartContainer}>
              <p className={styles.navbarTextAmount}>{cartItems.length > 0 ? cartItems.length : ''}</p>
              {/* <img src={Cart} alt="Cart"  width={50} height={'auto'} onClick={handleShowCartModal}/> */}
              <ShoppingCartOutlinedIcon style={{ fontSize: 50 }} onClick={handleShowCartModal}/>
              </div>
              {showCartModal && (<CartModal handleShowCartModal={handleShowCartModal}/>)}
            </>
          )
        }
    </div>
  )
}
