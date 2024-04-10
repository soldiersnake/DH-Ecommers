import { Toaster } from "sonner";
// import styles from '../../components/ui/Table/Table.module.css';
import styles from './Checkout.module.css';
import { Table } from "../../components/ui/Table";

const Checkout = () => {

  return (
    <>
        <div className={styles.container}>
            <Toaster richColors/>
            <h2 className={styles.title}>Checkout</h2>
            <div className={styles.grid}>
                <div className={styles.tableContainer}>
                    <Table/>
                </div>
                <div>
                    {/* FORMULARIO TARJETA */}
                </div>
            </div>
            <button className={styles.buyButton}>Buy Now</button>
        </div>
    </>
  )
}

export default Checkout
