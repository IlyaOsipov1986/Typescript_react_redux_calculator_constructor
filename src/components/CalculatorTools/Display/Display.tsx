import React, {FC} from "react";
import styles from "../../CalculatorTools/Display/Display.module.css";
import {IToolList} from "../../../types/toolList.tsx";
import useShowDisplay from "../../../utils/CustomHooks/useShowDisplay/useShowDisplay.tsx";
import useCalculatorContext from "../../../utils/CustomHooks/useCalculatorContext/useCalculatorContext.tsx";

interface DisplayProps {
    isToolsList: IToolList[];
    isActiveRunTimeMode?: boolean;
    handleOnDrag: (e: React.DragEvent, typeSideBar: string) => void;
}

const Display: FC<DisplayProps> = (props) => {

    const {
        isToolsList,
        isActiveRunTimeMode,
        handleOnDrag
    } = props;

    const { calc } = useCalculatorContext();
    const [isNotActiveDrag] = useShowDisplay(isToolsList);

    return (
        <div className={isNotActiveDrag ? styles.containerNotDrag : styles.container}
            onDragStart={(e) => handleOnDrag(e, 'display')}
            draggable={!isNotActiveDrag}>
            <input className={isNotActiveDrag ? styles.displayInputNotDrag : styles.displayInput}
                type={"text"}
                value={isActiveRunTimeMode !== undefined ? '' : calc.num ? calc.num : calc.res}
                placeholder={'0'}
                disabled={false}
                readOnly={true}
            />
        </div>
    )
}
export default Display;