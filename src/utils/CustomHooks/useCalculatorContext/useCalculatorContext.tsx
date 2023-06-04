import { useContext } from "react";
import CalculatorContext from "../../../contexts/CalculatorContext.tsx";

const useCalculatorContext = () => {
    return useContext(CalculatorContext);
}
export default useCalculatorContext;