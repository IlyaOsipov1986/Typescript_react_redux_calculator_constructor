import {FC} from "react";
import styles from "../../CalculatorTools/Numbers/Numbers.module.css"
import {numberList} from "../../../utils/numberList.tsx";

const Numbers: FC = () => {

    return (
        <div className={styles.container}>
            {numberList.map(el => {
                return (
                    <span className={styles.numberButtons} key={el.id}>
                        {el.label}
                    </span>
                )
            })}
        </div>
    )
}
export default Numbers;