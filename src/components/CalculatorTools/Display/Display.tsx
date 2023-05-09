import {FC} from "react";
import styles from "../../CalculatorTools/Display/Display.module.css";

const Display: FC = () => {

    return (
        <div className={styles.container}>
            <input className={styles.displayInput}
                type={"text"}
            />
        </div>
    )
}
export default Display;