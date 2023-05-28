import React, {FC} from "react";
import styles from "../../CalculatorTools/Operations/Operations.module.css";
import {IToolList} from "../../../types/toolList.tsx";
import useShowOperations from "../../../utils/CustomHooks/useShowOperations/useShowOperations.tsx";

interface OperationsProps {
    isToolsList: IToolList[];
    isActiveRunTimeMode?: boolean;
    handleOnDrag: (e: React.DragEvent, typeSideBar: string) => void;
}

const Operations: FC<OperationsProps> = (props) => {

    const {
        isToolsList,
        isActiveRunTimeMode,
        handleOnDrag
    } = props;

    const [isNotActiveDrag] = useShowOperations(isToolsList);

    return (
        <div className={isNotActiveDrag ? styles.containerNotDrag : styles.container}
             onDragStart={(e) => handleOnDrag(e, 'operations')}
             draggable={!isNotActiveDrag}>
            <button disabled={!isActiveRunTimeMode} className={isNotActiveDrag ? styles.operationButtonNoDrag : styles.operationButton}>/</button>
            <button disabled={!isActiveRunTimeMode} className={isNotActiveDrag ? styles.operationButtonNoDrag : styles.operationButton}>*</button>
            <button disabled={!isActiveRunTimeMode} className={isNotActiveDrag ? styles.operationButtonNoDrag : styles.operationButton}>-</button>
            <button disabled={!isActiveRunTimeMode} className={isNotActiveDrag ? styles.operationButtonNoDrag : styles.operationButton}>+</button>
        </div>
    )
}
export default Operations;