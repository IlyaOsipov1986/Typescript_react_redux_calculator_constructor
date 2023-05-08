import {FC, useState} from "react";
import eyeActiveIcon from "../../img/eyeActive.svg";
import eyeIcon from "../../img/eye.svg";
import selectorIcon from "../../img/selectorActive.svg";
import selectorActivIcon from "../../img/selector.svg";
import styles from "../ToggleRunTimeConstructor/ToggleRunTimeConstructor.module.css";

const ToggleRunTimeConstructor: FC = () => {

    const [isActiveToggleRunTime, setActiveToggleRunTime] = useState(false);
    const [isActiveToggleConstructor, setActiveToggleConstructor] = useState(true);

    const onHandleToggleRunTime = () => {
            setActiveToggleRunTime(true)
            setActiveToggleConstructor(false)
    }

    const onHandleToggleConstructor = () => {
            setActiveToggleRunTime(false)
            setActiveToggleConstructor(true)
    }

    return (
        <div className={styles.container}>
            <div className={styles.buttonsBlock}>
                <div onClick={() => onHandleToggleRunTime()} className={isActiveToggleRunTime ? styles.runtimeButtonActive : styles.runtimeButton}>
                    <img src={isActiveToggleRunTime ? eyeActiveIcon : eyeIcon} alt="icon"/>
                    <p className={styles.buttonsText}>Runtime</p>
                </div>
                <div onClick={() => onHandleToggleConstructor()} className={isActiveToggleConstructor ? styles.constructorButtonActive : styles.constructorButton}>
                    <img src={isActiveToggleConstructor ? selectorActivIcon : selectorIcon} alt="icon"/>
                    <p className={styles.buttonsText}>Constructor</p>
                </div>
            </div>
        </div>
    )
}
export default ToggleRunTimeConstructor;