import {FC} from "react";
import styles from "../../CalculatorTools/Operations/Operations.module.css";

const Operations: FC = () => {

    return (
        <div className={styles.container}>
            <div className={styles.operationButton}>
                <span>/</span>
            </div>
            <div className={styles.operationButton}>
                <span>*</span>
            </div>
            <div className={styles.operationButton}>
                <span>-</span>
            </div>
            <div className={styles.operationButton}>
                <span>+</span>
            </div>
        </div>
    )
}
export default Operations;