import React, {FC} from "react";
import styles from "../../CalculatorTools/Numbers/Numbers.module.css"
import {numberList} from "../../../utils/numberList.tsx";
import {IToolList} from "../../../types/toolList.tsx";
import useShowNumbers from "../../../utils/CustomHooks/useShowNumbers/useShowNumbers.tsx";
import useCalculatorContext from "../../../utils/CustomHooks/useCalculatorContext/useCalculatorContext.tsx";

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

    const { calc, setCalc } = useCalculatorContext();
    const [isNotActiveDrag] = useShowNumbers(isToolsList);

    const commaClick = () => {
        setCalc({...calc, num: 29
        })
    }

    const onHandleNumber = (value: string | number) => {
        switch (value) {
            case '.' : commaClick()
                break;
            default: return
        }
    }

    return (
        <div className={isNotActiveDrag ? styles.containerNotDrag : styles.container}
             onDragStart={(e) => handleOnDrag(e, 'numbers')}
             draggable={!isNotActiveDrag}>
            {numberList.map(el => {
                return (
                    <button key={el.id}
                            disabled={!isActiveRunTimeMode}
                            onClick={() => onHandleNumber(el.value)}
                            className={isNotActiveDrag ? styles.numberButtonsNotDrag : styles.numberButtons}>
                        {el.label}
                    </button>
                )
            })}
        </div>
    )
}
export default Numbers;