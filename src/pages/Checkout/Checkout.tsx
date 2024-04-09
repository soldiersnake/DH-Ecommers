import { Toaster } from "sonner";
import Table from "../../components/ui/Table/Table";
import styles from './Checkout.module.css';

const Checkout = () => {

  return (
    <>
        <div className={styles.container}>
            <Toaster richColors/>
            <h1 className={styles.title}>Checkout</h1>
            <div className={styles.grid}>
                <div>
                    <Table/>
                </div>
                <div>
                    {/* FORMULARIO TARJETA */}
                </div>
            </div>
        </div>
    </>
  )
}

export default Checkout
