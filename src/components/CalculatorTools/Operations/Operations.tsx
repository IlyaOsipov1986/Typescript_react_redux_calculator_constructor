import React, {FC} from "react";
import styles from "../../CalculatorTools/Operations/Operations.module.css";

interface OperationsProps {
    handleOnDrag: (e: React.DragEvent, typeSideBar: string) => void;
}

const Operations: FC<OperationsProps> = (props) => {

    const {
        handleOnDrag
    } = props;

    return (
        <div className={styles.container}
             onDragStart={(e) => handleOnDrag(e, 'operations')}
             draggable>
            <div className={styles.operationButton}>
                <span>/</span>
            </div>
            <div className={styles.operationButton}>
                <span>*</span>
            </div>
            <div className={styles.operationButton}>
                <span>-</span>
            </div>
            <div className={styles.operationButton}>
                <span>+</span>
            </div>
        </div>
    )
}
export default Operations;