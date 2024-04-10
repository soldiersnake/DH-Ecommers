import { Toaster } from "sonner";
// import styles from '../../components/ui/Table/Table.module.css';
import styles from './Checkout.module.css';
import { Table } from "../../components/ui/Table";
import { CardCredit } from "../../components/ui/CardCredit/CardCredit";

const Checkout = () => {

  return (
    <>
        <div className={styles.container}>
            <Toaster richColors visibleToasts={1}/>
            <h1 className={styles.title}>Checkout</h1>
            <div className={styles.grid}>
                <div className={styles.tableContainer}>
                    <Table/>
                </div>
                <div>
                    <CardCredit/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Checkout
