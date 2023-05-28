import React, {FC, useEffect, useState} from "react";
import styles from "../ Canvas/ Canvas.module.css";
import emptyIcon from "../../img/emptyBlock.svg";
import Display from "../CalculatorTools/Display/Display.tsx";
import Equals from "../CalculatorTools/Equals/Equals.tsx";
import Numbers from "../CalculatorTools/Numbers/Numbers.tsx";
import Operations from "../CalculatorTools/Operations/Operations.tsx";
import {IToolList} from "../../types/toolList.tsx";
import useShowDisplay from "../../utils/CustomHooks/useShowDisplay/useShowDisplay.tsx";
import useShowEquals from "../../utils/CustomHooks/useShowEquals/useShowEquals.tsx";
import useShowNumbers from "../../utils/CustomHooks/useShowNumbers/useShowNumbers.tsx";
import useShowOperations from "../../utils/CustomHooks/useShowOperations/useShowOperations.tsx";

interface CanvasProps {
    isToolsList: IToolList[];
    isActiveRunTimeMode: boolean;
    handleDragOver: (e: React.DragEvent) => void;
    handleOnDrop: (e: React.DragEvent) => void;
    handleOnDrag: (e: React.DragEvent, typeSideBar: string) => void;
}

const Canvas: FC<CanvasProps> = (props) => {

    const {
        isToolsList,
        isActiveRunTimeMode,
        handleDragOver,
        handleOnDrop,
        handleOnDrag
    } = props;

    const [isHideCanvasEmpty, setHideCanvasEmpty] = useState(true);
    // @ts-ignore
    const [isShowDisplay, setShowDisplay] = useShowDisplay(isToolsList);
    // @ts-ignore
    const [isShowEquals, setShowEquals] = useShowEquals(isToolsList);
    // @ts-ignore
    const [isShowNumbers, setShowNumbers] = useShowNumbers(isToolsList);
    // @ts-ignore
    const [isShowOperations, setShowOperations] = useShowOperations(isToolsList);


    useEffect(() => {
        let isMounted = true;
        if (isToolsList.length !== 0) {
            isMounted && setHideCanvasEmpty(false);
        } else {
            isMounted && setHideCanvasEmpty(true);
        }
        return () => {
            isMounted = false;
        }
    },[isToolsList])

    return (
        <div onDrop={handleOnDrop} onDragOver={handleDragOver} className={styles.container}>
            {isHideCanvasEmpty ? (
                    <div className={styles.containerEmptyCanvas}>
                        <div className={styles.iconMessageBlock}>
                            <img src={emptyIcon} alt={'icon'}/>
                            <p className={styles.blueText}>Перетащите сюда</p>
                            <p className={styles.grayText}>любой элемент</p>
                            <p className={styles.grayText}>из левой панели</p>
                        </div>
                    </div>
            ) : (
                    <div className={isActiveRunTimeMode ? styles.containerCalculatorTools : styles.containerCalculatorToolsNoEvents}>
                        {isShowDisplay ?
                            <Display
                                isActiveRunTimeMode={isActiveRunTimeMode}
                                isToolsList={isToolsList}
                                handleOnDrag={handleOnDrag}
                            /> : <div className={styles.containerEmptyDisplay}/>}
                        {isShowOperations ?
                            <Operations
                                isActiveRunTimeMode={isActiveRunTimeMode}
                                isToolsList={isToolsList}
                                handleOnDrag={handleOnDrag}
                            /> : <div className={styles.containerEmptyOperations}/>}
                        {isShowNumbers ?
                            <Numbers
                                isActiveRunTimeMode={isActiveRunTimeMode}
                                isToolsList={isToolsList}
                                handleOnDrag={handleOnDrag}
                            /> : <div className={styles.containerEmptyNumbers}/>}
                        {isShowEquals ?
                            <Equals
                                isActiveRunTimeMode={isActiveRunTimeMode}
                                isToolsList={isToolsList}
                                handleOnDrag={handleOnDrag}
                            /> : <div className={styles.containerEmptyEquals}/>}
                    </div>
            )}
        </div>
    )
}
export default Canvas;