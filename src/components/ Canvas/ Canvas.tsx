import {FC} from "react";
import styles from "../ Canvas/ Canvas.module.css";
import emptyIcon from "../../img/emptyBlock.svg";

const Canvas: FC = () => {

    return (
        <div className={styles.container}>
            <div className={styles.iconMessageBlock}>
                <img src={emptyIcon} alt={'icon'}/>
                <p className={styles.blueText}>Перетащите сюда</p>
                <p className={styles.grayText}>любой элемент</p>
                <p className={styles.grayText}>из левой панели</p>
            </div>
        </div>
    )
}
export default Canvas;