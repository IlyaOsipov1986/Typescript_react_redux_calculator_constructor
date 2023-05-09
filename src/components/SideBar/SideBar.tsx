import {FC} from "react";
import styles from "../SideBar/SideBar.module.css";
import Display from "../CalculatorTools/Display/Display.tsx";
import Operations from "../CalculatorTools/Operations/Operations.tsx";
import Numbers from "../CalculatorTools/Numbers/Numbers.tsx";
import Equals from "../CalculatorTools/Equals/Equals.tsx";

const SideBar: FC = () => {


    return (
        <div className={styles.container}>
            <Display/>
            <Operations/>
            <Numbers/>
            <Equals/>
        </div>
    )
}
export default SideBar;