import React, {FC} from "react";
import styles from "../../CalculatorTools/Equals/Equals.module.css";

interface EqualsProps {
    handleOnDrag: (e: React.DragEvent, typeSideBar: string) => void;
}

const Equals: FC<EqualsProps> = (props) => {

    const {
        handleOnDrag
    } = props;

    return (
        <div className={styles.container}
             onDragStart={(e) => handleOnDrag(e, 'equals')}
             draggable>
            <div className={styles.equalsButton}>
                <span>=</span>
            </div>
        </div>
    )
}
export default Equals;