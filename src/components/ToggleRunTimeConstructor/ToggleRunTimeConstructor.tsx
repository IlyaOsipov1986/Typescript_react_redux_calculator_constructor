import {FC, useEffect, useState} from "react";
import eyeActiveIcon from "../../img/eyeActive.svg";
import eyeIcon from "../../img/eye.svg";
import selectorIcon from "../../img/selectorActive.svg";
import selectorActiveIcon from "../../img/selector.svg";
import resetIcon from "../../img/resetIcon.svg";
import styles from "../ToggleRunTimeConstructor/ToggleRunTimeConstructor.module.css";
import {IToolList} from "../../types/toolList.tsx";

interface ToggleRunTimeProps {
    isToolsList: IToolList[];
    onHandleReset: (setActiveConstrMode: (mode: boolean) => void, setRunTimeMode: (mode: boolean) => void) => void;
    onHandleToggleRunTime: (setActiveToggleRunTime: (mode: boolean) => void, setActiveToggleConstructor: (mode: boolean) => void) => void;
    onHandleToggleConstructor: (setActiveToggleRunTime: (mode: boolean) => void, setActiveToggleConstructor: (mode: boolean) => void) => void;
}

const ToggleRunTimeConstructor: FC<ToggleRunTimeProps> = (props) => {

    const {
        isToolsList,
        onHandleReset,
        onHandleToggleConstructor,
        onHandleToggleRunTime
    } = props;

    const [isActiveToggleRunTime, setActiveToggleRunTime] = useState(false);
    const [isActiveToggleConstructor, setActiveToggleConstructor] = useState(true);
    const [isShowResetBtn, setShowResetBtn] = useState(false);

    useEffect(() => {
        if (isToolsList?.length !== 0) {
            setShowResetBtn(true);
        } else {
            setShowResetBtn(false);
        }
    },[isToolsList.length])

    return (
        <div className={styles.container}>
                <img className={isShowResetBtn ? styles.containerReset : styles.containerResetHide}
                     onClick={() => onHandleReset(setActiveToggleConstructor, setActiveToggleRunTime)}
                     src={resetIcon}
                     alt={'иконка-сбросить'}
                />
            <div className={styles.containerButtonsBlock}>
                <div className={styles.buttonsBlock}>
                    <div onClick={() => onHandleToggleRunTime(setActiveToggleRunTime, setActiveToggleConstructor)} className={isActiveToggleRunTime ? styles.runtimeButtonActive : styles.runtimeButton}>
                        <img className={styles.iconButtons} src={isActiveToggleRunTime ? eyeActiveIcon : eyeIcon} alt="icon"/>
                        <p className={styles.buttonsText}>Runtime</p>
                    </div>
                    <div onClick={() => onHandleToggleConstructor(setActiveToggleRunTime, setActiveToggleConstructor)} className={isActiveToggleConstructor ? styles.constructorButtonActive : styles.constructorButton}>
                        <img className={styles.iconButtons} src={isActiveToggleConstructor ? selectorActiveIcon : selectorIcon} alt="icon"/>
                        <p className={styles.buttonsText}>Constructor</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ToggleRunTimeConstructor;