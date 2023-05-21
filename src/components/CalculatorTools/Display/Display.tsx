import React, {FC, useState} from "react";
import styles from "../../CalculatorTools/Display/Display.module.css";

interface DisplayProps {
    handleOnDrag: (e: React.DragEvent, typeSideBar: string) => void;
}

const Display: FC<DisplayProps> = (props) => {

    const {
        handleOnDrag
    } = props;

    const [isNotActiveTool, setNotActiveTool] = useState(true);

    return (
        <div className={isNotActiveTool ? styles.containerNotActive : styles.container}
            onDragStart={(e) => handleOnDrag(e, 'display')}
            draggable={true}>
            <input className={styles.displayInput}
                type={"text"}
                placeholder={'0'}
                disabled={true}
            />
        </div>
    )
}
export default Display;