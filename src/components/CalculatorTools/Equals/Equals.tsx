import {FC} from "react";
import styles from "../../CalculatorTools/Equals/Equals.module.css";

const Equals: FC = () => {

    return (
        <div className={styles.container}>
            <div className={styles.equalsButton}>
                <span>=</span>
            </div>
        </div>
    )
}
export default Equals;