import React, {FC} from "react";
import styles from "../SideBar/SideBar.module.css";
import Display from "../CalculatorTools/Display/Display.tsx";
import Operations from "../CalculatorTools/Operations/Operations.tsx";
import Numbers from "../CalculatorTools/Numbers/Numbers.tsx";
import Equals from "../CalculatorTools/Equals/Equals.tsx";

interface SideBarProps {
    handleOnDrag: (e: React.DragEvent, typeSideBar: string) => void;
}

const SideBar: FC<SideBarProps> = (props) => {

    const {
        handleOnDrag
    } = props;

    return (
        <div className={styles.container}>
            <Display
                handleOnDrag={handleOnDrag}
            />
            <Operations
                handleOnDrag={handleOnDrag}
            />
            <Numbers
                handleOnDrag={handleOnDrag}
            />
            <Equals
                handleOnDrag={handleOnDrag}
            />
        </div>
    )
}
export default SideBar;