import React, {FC} from "react";
import styles from "../../CalculatorTools/Operations/Operations.module.css";
import {IToolList} from "../../../types/toolList.tsx";
import useShowOperations from "../../../utils/CustomHooks/useShowOperations/useShowOperations.tsx";
import useCalculatorContext from "../../../utils/CustomHooks/useCalculatorContext/useCalculatorContext.tsx";

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

    const { calc, setCalc } = useCalculatorContext();
    const [isNotActiveDrag] = useShowOperations(isToolsList);

    const onHandleOperationKey = (value: string) => {
        switch (value) {
            case '/' : setCalc({
                sign: '/',
                res: !calc.res && calc.num ? calc.num : calc.res,
                num: 0
            })
                break;
            case '*' : setCalc({
                sign: '*',
                res: !calc.res && calc.num ? calc.num : calc.res,
                num: 0
            })
                break;
            case '-' : setCalc({
                sign: '-',
                res: !calc.res && calc.num ? calc.num : calc.res,
                num: 0
            })
                break;
            case '+' : setCalc({
                sign: '+',
                res: !calc.res && calc.num ? calc.num : calc.res,
                num: 0
            })
                break;
            default: return
        }
    }

    return (
        <div className={isNotActiveDrag ? styles.containerNotDrag : styles.container}
             onDragStart={(e) => handleOnDrag(e, 'operations')}
             draggable={!isNotActiveDrag}>
            <button onClick={() => onHandleOperationKey('/')} disabled={!isActiveRunTimeMode} className={isNotActiveDrag ? styles.operationButtonNoDrag : styles.operationButton}>/</button>
            <button onClick={() => onHandleOperationKey('*')} disabled={!isActiveRunTimeMode} className={isNotActiveDrag ? styles.operationButtonNoDrag : styles.operationButton}>*</button>
            <button onClick={() => onHandleOperationKey('-')} disabled={!isActiveRunTimeMode} className={isNotActiveDrag ? styles.operationButtonNoDrag : styles.operationButton}>-</button>
            <button onClick={() => onHandleOperationKey('+')} disabled={!isActiveRunTimeMode} className={isNotActiveDrag ? styles.operationButtonNoDrag : styles.operationButton}>+</button>
        </div>
    )
}
export default Operations;