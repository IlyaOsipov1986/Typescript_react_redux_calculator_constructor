import React, {FC} from "react";
import styles from "../../CalculatorTools/Numbers/Numbers.module.css"
import {numberList} from "../../../utils/numberList.tsx";
import {IToolList} from "../../../types/toolList.tsx";
import useShowNumbers from "../../../utils/CustomHooks/useShowNumbers/useShowNumbers.tsx";

interface NumbersProps {
    isToolsList: IToolList[];
    isActiveRunTimeMode?: boolean;
    handleOnDrag: (e: React.DragEvent, typeSideBar: string) => void;
}

const Numbers: FC<NumbersProps> = (props) => {

    const {
        isToolsList,
        isActiveRunTimeMode,
        handleOnDrag
    } = props

    const [isNotActiveDrag] = useShowNumbers(isToolsList);

    const onNumbers = (number: string | number) => {
        console.log(number)
    }

    return (
        <div className={isNotActiveDrag ? styles.containerNotDrag : styles.container}
             onDragStart={(e) => handleOnDrag(e, 'numbers')}
             draggable={!isNotActiveDrag}>
            {numberList.map(el => {
                return (
                    <button key={el.id}
                            disabled={!isActiveRunTimeMode}
                            onClick={() => onNumbers(el.value)}
                            className={isNotActiveDrag ? styles.numberButtonsNotDrag : styles.numberButtons}>
                        {el.label}
                    </button>
                )
            })}
        </div>
    )
}
export default Numbers;