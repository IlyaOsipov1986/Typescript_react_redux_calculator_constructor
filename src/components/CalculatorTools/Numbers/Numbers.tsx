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

    //Пользователь кликает на точку
    const commaClick = (value: string) => {
        setCalc({...calc,
            num: !calc.num.toString().includes('.') ? calc.num + value : calc.num
        })
    }

    //Пользователь кликает на сброс
    const resetClick = () => {
        setCalc({ sign: '', num: 0, res: 0 })
    }

    //Пользователь кликает на цифры
    const numberClick = (value: string | number) => {
        const numberString = value.toString();

        let numberValue;
        if(numberString === '0' && calc.num === 0) {
            numberValue = '0'
        } else {
            numberValue = Number(calc.num + numberString)
        }
        setCalc({
            ...calc,
            num: numberValue
        })
    }

    const onHandleCalcKey = (value: string | number) => {
        if (value === '.' || value === 'C') {
            switch (value) {
                case '.' : commaClick(value)
                    break;
                case 'C' : resetClick()
                    break;
                default: return value
            }
        } else {
            numberClick(value)
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
                            onClick={() => onHandleCalcKey(el.value)}
                            className={isNotActiveDrag ? styles.numberButtonsNotDrag : styles.numberButtons}>
                        {el.label}
                    </button>
                )
            })}
        </div>
    )
}
export default Numbers;