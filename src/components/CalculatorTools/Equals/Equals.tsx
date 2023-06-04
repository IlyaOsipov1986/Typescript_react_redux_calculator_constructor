import React, {FC} from "react";
import styles from "../../CalculatorTools/Equals/Equals.module.css";
import {IToolList} from "../../../types/toolList.tsx";
import useShowEquals from "../../../utils/CustomHooks/useShowEquals/useShowEquals.tsx";
import useCalculatorContext from "../../../utils/CustomHooks/useCalculatorContext/useCalculatorContext.tsx";

interface EqualsProps {
    isToolsList: IToolList[];
    isActiveRunTimeMode?: boolean;
    handleOnDrag: (e: React.DragEvent, typeSideBar: string) => void;
}

const Equals: FC<EqualsProps> = (props) => {

    const {
        isToolsList,
        handleOnDrag
    } = props;

    const { calc, setCalc } = useCalculatorContext();
    const [isNotActiveDrag] = useShowEquals(isToolsList);

    const equalsClick = () => {
        if(calc.res && calc.num) {
            switch (calc.sign) {
                case '+' : setCalc({
                    res: Number(calc.res) + Number(calc.num),
                    sign: '',
                    num: 0
                })
                    break;
                case '-' : setCalc({
                    res: Number(calc.res) - Number(calc.num),
                    sign: '',
                    num: 0
                })
                    break;
                case '*' : setCalc({
                    res: Number(calc.res) * Number(calc.num),
                    sign: '',
                    num: 0
                })
                    break;
                case '/':  setCalc({
                    res: Number(calc.res) / Number(calc.num),
                    sign: '',
                    num: 0
                })
                    break;
                default: return
            }
        }
    }

    return (
        <div className={isNotActiveDrag ? styles.containerNotDrag : styles.container}
             onDragStart={(e) => handleOnDrag(e, 'equals')}
             draggable={!isNotActiveDrag}>
            <button onClick={equalsClick} draggable={!isNotActiveDrag} className={isNotActiveDrag ? styles.equalsButtonNotDrag : styles.equalsButton} >
                <span>=</span>
            </button>
        </div>
    )
}
export default Equals;