import React, {FC} from "react";
import styles from "../../CalculatorTools/Equals/Equals.module.css";
import {IToolList} from "../../../types/toolList.tsx";
import useShowEquals from "../../../utils/CustomHooks/useShowEquals/useShowEquals.tsx";

interface EqualsProps {
    isToolsList: IToolList[];
    isActiveRunTimeMode?: boolean;
    handleOnDrag: (e: React.DragEvent, typeSideBar: string) => void;
}

const Equals: FC<EqualsProps> = (props) => {

    const {
        isToolsList,
        isActiveRunTimeMode,
        handleOnDrag
    } = props;

    const [isNotActiveDrag] = useShowEquals(isToolsList);

    return (
        <div className={isNotActiveDrag ? styles.containerNotDrag : styles.container}
             onDragStart={(e) => handleOnDrag(e, 'equals')}
             draggable={!isNotActiveDrag}>
            <button className={isNotActiveDrag ? styles.equalsButtonNotDrag : styles.equalsButton} disabled={!isActiveRunTimeMode}>
                <span>=</span>
            </button>
        </div>
    )
}
export default Equals;