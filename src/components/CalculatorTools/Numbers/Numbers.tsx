import React, {FC} from "react";
import styles from "../../CalculatorTools/Numbers/Numbers.module.css"
import {numberList} from "../../../utils/numberList.tsx";

interface NumbersProps {
    handleOnDrag: (e: React.DragEvent, typeSideBar: string) => void;
}

const Numbers: FC<NumbersProps> = (props) => {

    const {
        handleOnDrag
    } = props

    return (
        <div className={styles.container}
             onDragStart={(e) => handleOnDrag(e, 'numbers')}
             draggable>
            {numberList.map(el => {
                return (
                    <span className={styles.numberButtons} key={el.id}>
                        {el.label}
                    </span>
                )
            })}
        </div>
    )
}
export default Numbers;