import React, {FC} from "react";
import styles from "../SideBar/SideBar.module.css";
import Display from "../CalculatorTools/Display/Display.tsx";
import Operations from "../CalculatorTools/Operations/Operations.tsx";
import Numbers from "../CalculatorTools/Numbers/Numbers.tsx";
import Equals from "../CalculatorTools/Equals/Equals.tsx";
import {IToolList} from "../../types/toolList.tsx";

interface SideBarProps {
    isToolsList: IToolList[];
    isActiveRunTimeMode: boolean;
    handleOnDrag: (e: React.DragEvent, typeSideBar: string) => void;
}

const SideBar: FC<SideBarProps> = (props) => {

    const {
        isToolsList,
        isActiveRunTimeMode,
        handleOnDrag
    } = props;

    return (
        <div className={isActiveRunTimeMode ? styles.containerRunTimeMode : styles.container}>
            <Display
                isActiveRunTimeMode={isActiveRunTimeMode}
                isToolsList={isToolsList}
                handleOnDrag={handleOnDrag}
            />
            <Operations
                isToolsList={isToolsList}
                handleOnDrag={handleOnDrag}
            />
            <Numbers
                isToolsList={isToolsList}
                handleOnDrag={handleOnDrag}
            />
            <Equals
                isToolsList={isToolsList}
                handleOnDrag={handleOnDrag}
            />
        </div>
    )
}
export default SideBar;